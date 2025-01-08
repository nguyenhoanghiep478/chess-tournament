import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentController } from './tournament.controller';
import { GoogleUtils } from 'src/utils/sheet.utils';

@Module({
  controllers: [TournamentController],
  providers: [TournamentService,GoogleUtils],
})
export class TournamentModule {}
