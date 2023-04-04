import { TypeOrmModule } from '@nestjs/typeorm';
import { Family } from './entities/family.entity';
import { Module } from '@nestjs/common';
import { FamiliesService } from './families.service';
import { FamiliesController } from './families.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Family])],
  controllers: [FamiliesController],
  providers: [FamiliesService],
})
export class FamiliesModule {}
