import { Module } from '@nestjs/common';
import { AppController } from './api/app.controller';
import { AppService } from './service/app.service';
import { TournamentModule } from './tournament/tournament.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    })
    
    ,TournamentModule],
})
export class AppModule {}
