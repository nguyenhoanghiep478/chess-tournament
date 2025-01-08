import { Body, Controller, Post } from "@nestjs/common";
import { TournamentService } from "src/service/tournament.service";

@Controller("/admin/tournament")
export class TournamentApi{
    constructor(private readonly tournamentService:TournamentService){}


    @Post("create-form")
    async createForm(@Body() formData:any){
        return this.tournamentService.createForm(formData);
    }
}