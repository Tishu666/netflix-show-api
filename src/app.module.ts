import { Module } from '@nestjs/common';
import { CsvModule } from './csv/csv.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NetflixModule } from 'src/Netflix/Netflix.module';
import { NetflixController } from './Netflix/Netflix.controller';

@Module({
  imports: [CsvModule, MongooseModule.forRoot('mongodb://localhost:27017/'),
    NetflixModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
