import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { config } from './config/data-source';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      ...config,
      autoLoadEntities: true
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
