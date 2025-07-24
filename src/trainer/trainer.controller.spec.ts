import { Test, TestingModule } from '@nestjs/testing';
import { TrainerController } from './trainer.controller';
import { TrainerService } from './trainer.service';
import { PlanRequest } from './dto/plan.dto';

describe('TrainerController', () => {
  let controller: TrainerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainerController],
      providers: [TrainerService],
    }).compile();

    controller = module.get<TrainerController>(TrainerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a plan', () => {
    const req: PlanRequest = { weight: 80, goal: 'lose_weight', level: 'beginner' };
    const res = controller.createPlan(req);
    expect(res.workouts.length).toBeGreaterThan(0);
  });
});
