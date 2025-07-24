export interface PlanRequest {
  weight: number;
  goal: 'lose_weight' | 'build_muscle' | 'endurance';
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface PlanResponse {
  workouts: string[];
  nutrition: string;
}
