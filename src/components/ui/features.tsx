import { BarChart3, Calendar, ChevronRight, Clock, Flame, MapPin } from "lucide-react";

const Features = () => {
    return (  
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Track Everything That Matters</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dragon Runner gives you all the tools you need to monitor and improve your running performance.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Date & Time Tracking</h3>
                <p className="text-muted-foreground text-center">
                  Record when you run to establish consistent training patterns.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Distance Tracking</h3>
                <p className="text-muted-foreground text-center">
                  Monitor your distance in kilometers to track your endurance progress.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Duration Monitoring</h3>
                <p className="text-muted-foreground text-center">
                  Track how long you run to improve your stamina and pace.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Calorie Counter</h3>
                <p className="text-muted-foreground text-center">See how many calories you burn during each run.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
                  <ChevronRight className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Pace Analysis</h3>
                <p className="text-muted-foreground text-center">
                  Track your average pace in km/min to optimize your running strategy.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Progress Visualization</h3>
                <p className="text-muted-foreground text-center">
                  View your progress over time with intuitive charts and graphs.
                </p>
              </div>
            </div>
          </div>
        </section>
    );
}
 
export default Features;