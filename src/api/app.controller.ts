import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { CreateAthleteDto } from 'src/tournament/dto/register-atheletic.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log("hello")
    return this.appService.getHello();
  }


  @Post()
  test(@Body() createAthleteDto: CreateAthleteDto){
    console.log('Received data from Google Form:', createAthleteDto);
    return { message: 'Athlete data received successfully' };
  }
}
