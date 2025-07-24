import { Body, Controller, Post } from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { PlanRequest, PlanResponse } from './dto/plan.dto';

@Controller('trainer')
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {}

  @Post('plan')
  createPlan(@Body() body: PlanRequest): PlanResponse {
    return this.trainerService.generatePlan(body);
  }
}
