import { Module } from '@nestjs/common';
import { CsvModule } from './csv/csv.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NetflixModule } from 'src/Netflix/Netflix.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from './config/config.service';
require('dotenv').config();
@Module({
  imports: [CsvModule, MongooseModule.forRoot(  process.env.DATABASE_HOST  ),
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    NetflixModule ,
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {
}
