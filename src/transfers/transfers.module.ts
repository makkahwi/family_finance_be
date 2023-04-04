import { TypeOrmModule } from '@nestjs/typeorm';
import { Transfer } from './entities/transfer.entity';
import { Module } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { TransfersController } from './transfers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Transfer])],
  controllers: [TransfersController],
  providers: [TransfersService],
})
export class TransfersModule {}
