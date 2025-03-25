"use server";

import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient, workout} from "@prisma/client";

const prisma = new PrismaClient();

export async function createOrUpdateWorkout(workout: workout) {
    await prisma.workout.upsert({
        where: { id: workout.id },
        update: {
            external_user_id: workout.external_user_id,
            workout_datetime: workout.workout_datetime,
            distance_km: workout.distance_km,
            duration_minutes: workout.duration_minutes,
            calories_burned_kcal: workout.calories_burned_kcal,
            average_pace_km_per_min: workout.average_pace_km_per_min
        },
        create: {
            ...workout,
            id: undefined,
        },
    })
}

export async function getWorkout() {

    const user = await currentUser();

    if(!user) {
        throw new Error("User not found");
    }

    return await prisma.workout.findMany({
        where: {
            external_user_id: user.id
        },
        orderBy: {
            workout_datetime: 'desc'
        }
    });
}

export async function getTrainingAvgPace() {
    const user = await currentUser();
    
    if(!user) {
        throw new Error("User not found");
    }

    const avgPace = await prisma.$queryRaw<number[]>`
        SELECT AVG(average_pace_km_per_min) as avg_pace
        FROM workout 
        WHERE external_user_id = ${user.id}
    `;
    
    return avgPace[0];
}