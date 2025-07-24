import { Injectable } from '@nestjs/common';
import { PlanRequest, PlanResponse } from './dto/plan.dto';

@Injectable()
export class TrainerService {
  generatePlan({ weight, goal, level }: PlanRequest): PlanResponse {
    const workouts: string[] = [];
    if (goal === 'lose_weight') {
      workouts.push('Cardio 30 mins');
      workouts.push('Full body circuit');
    } else if (goal === 'build_muscle') {
      workouts.push('Strength training 4x per week');
      workouts.push('Focus on compound movements');
    } else if (goal === 'endurance') {
      workouts.push('Interval running');
      workouts.push('Cycling sessions');
    }

    if (level === 'beginner') {
      workouts.push('Start with light weights and high reps');
    } else if (level === 'advanced') {
      workouts.push('Include progressive overload');
    }

    const nutrition = `Consume around ${Math.round(
      weight * 30,
    )} kcal per day with balanced macros.`;

    return { workouts, nutrition };
  }
}
