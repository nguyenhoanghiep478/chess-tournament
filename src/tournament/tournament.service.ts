import { Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { GoogleUtils } from 'src/utils/sheet.utils';
import { Athlete } from 'src/tournament/entities/athlete.datatype';

@Injectable()
export class TournamentService {
  constructor(private readonly googleUtils:GoogleUtils){}
  create(createTournamentDto: CreateTournamentDto) {
    return 'This action adds a new tournament';
  }

  findAll() {
    return `This action returns all tournament`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tournament`;
  }

  update(id: number, updateTournamentDto: UpdateTournamentDto) {
    return `This action updates a #${id} tournament`;
  }

  remove(id: number) {
    return `This action removes a #${id} tournament`;
  }
  public async createForm(data: any) {
    return await this.googleUtils.createGoogleForm(data)
  }

  public async getAllAtheletics(spreadsheetId: string, range: string): Promise<Athlete[]> {
    return await this.googleUtils.getAllAthletics(spreadsheetId, range);
  }

}
