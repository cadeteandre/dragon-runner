"use server";

import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient, workout } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { WorkoutInput } from "@/types/workout";

const prisma = new PrismaClient();

function convertToWorkout(input: WorkoutInput): Omit<workout, 'id'> {
    return {
        ...input,
        distance_km: new Decimal(input.distance_km.toString()),
        average_pace_km_per_min: new Decimal(input.average_pace_km_per_min.toString())
    };
}

export async function createOrUpdateWorkout(input: Omit<WorkoutInput, 'external_user_id'>) {
    const user = await currentUser();
    
    if (!user) {
        throw new Error("User not found");
    }

    const workoutWithDecimal = convertToWorkout({
        ...input,
        external_user_id: user.id
    });

    await prisma.workout.create({
        data: workoutWithDecimal
    });
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