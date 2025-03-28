import { workout } from '@prisma/client';

export type WorkoutInput = {
    external_user_id: string;
    workout_datetime: Date;
    distance_km: number;
    duration_minutes: number;
    calories_burned_kcal: number;
    average_pace_km_per_min: number;
}; 