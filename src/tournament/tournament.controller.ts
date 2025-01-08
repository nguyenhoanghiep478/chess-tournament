import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';

@Controller('admin/tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

 @Post("/create-form")
 async createForm(@Body() data:any){
  const formResponse = await this.tournamentService.createForm(data)
  return {formUrl: formResponse.formUrl , editFormUrl: formResponse.editFormUrl};
 }


  @Post()
  create(@Body() createTournamentDto: CreateTournamentDto) {
    return this.tournamentService.create(createTournamentDto);
  }

  @Get()
  findAll() {
    return this.tournamentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tournamentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTournamentDto: UpdateTournamentDto) {
    return this.tournamentService.update(+id, updateTournamentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tournamentService.remove(+id);
  }
}
