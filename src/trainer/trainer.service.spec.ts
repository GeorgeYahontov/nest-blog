import { Test, TestingModule } from '@nestjs/testing';
import { TrainerService } from './trainer.service';
import { PlanRequest } from './dto/plan.dto';

describe('TrainerService', () => {
  let service: TrainerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainerService],
    }).compile();

    service = module.get<TrainerService>(TrainerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate a plan', () => {
    const req: PlanRequest = { weight: 70, goal: 'build_muscle', level: 'beginner' };
    const res = service.generatePlan(req);
    expect(res.workouts.length).toBeGreaterThan(0);
    expect(res.nutrition).toContain('kcal');
  });
});
