'use client';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input"
import { createOrUpdateWorkout } from "@/server/training_session/actions";
import { WorkoutInput } from "@/types/workout";

const DashboardForm = () => {

    async function handleSubmit(formData: FormData) {
        const formattedDate = `${formData.get('date')}T${formData.get('time')}:00Z`;

        const newWorkout = {
            workout_datetime: new Date(formattedDate),
            distance_km: Number(formData.get('distance')),
            duration_minutes: Number(formData.get('duration')),
            calories_burned_kcal: Number(formData.get('calories')),
            average_pace_km_per_min: Number(formData.get('distance')) / Number(formData.get('duration'))
        }

        console.log('New workout:', newWorkout);

        await createOrUpdateWorkout(newWorkout);
    }
        
    return (  
        <TabsContent value="add" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Add New Run</CardTitle>
                <CardDescription>Record the details of your run</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="workout-date">Date</Label>
                      <Input
                        name="date"
                        id="workout-date"
                        type="date"
                        defaultValue={new Date().toISOString().split("T")[0]}
                        className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="workout-time">Time</Label>
                      <Input
                        name="time"
                        id="workout-time"
                        type="time"
                        defaultValue="07:30"
                        className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="distance">Distance (km)</Label>
                      <div className="relative">
                        <Input
                          name="distance"
                          id="distance"
                          type="number"
                          step="0.01"
                          placeholder="5.0"
                          className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-400">
                          km
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration (minutes)</Label>
                      <div className="relative">
                        <Input
                          name="duration"
                          id="duration"
                          type="number"
                          placeholder="30"
                          className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-400">
                          min
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="calories">Calories Burned (kcal)</Label>
                      <div className="relative">
                        <Input
                          name="calories"
                          id="calories"
                          type="number"
                          placeholder="350"
                          className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-400">
                          kcal
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pace">Average Pace (min/km)</Label>
                      <div className="relative">
                        <Input
                          name="pace"
                          id="pace"
                          placeholder="5:30"
                          className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-400">
                          min/km
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes (optional)</Label>
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="Add notes about your run..."
                      className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <Label>Run Type</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-amber-500 text-amber-500 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/20 dark:hover:bg-amber-950/40"
                      >
                        Short
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-blue-500 text-blue-500 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/20 dark:hover:bg-blue-950/40"
                      >
                        Medium
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-green-500 text-green-500 bg-green-50 hover:bg-green-100 dark:bg-green-950/20 dark:hover:bg-green-950/40"
                      >
                        Long
                      </Button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0"
                  >
                    Save Run
                  </Button>
                </form>
              </CardContent>
            </Card>
        </TabsContent>
    );
}
 
export default DashboardForm;