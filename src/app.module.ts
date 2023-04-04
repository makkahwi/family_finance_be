import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './accounts/accounts.module';
import { CategoriesModule } from './categories/categories.module';
import { config } from './config/data-source';
import { FamiliesModule } from './families/families.module';
import { RecordsModule } from './records/records.module';
import { RolesModule } from './roles/roles.module';
import { TransfersModule } from './transfers/transfers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    RecordsModule,
    AccountsModule,
    CategoriesModule,
    TransfersModule,
    UsersModule,
    FamiliesModule,
    RolesModule,
    TypeOrmModule.forRoot({
      ...config,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
