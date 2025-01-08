import { Injectable } from "@nestjs/common";
import { Athlete } from "src/tournament/entities/athlete.datatype";
import { GoogleUtils } from "src/utils/sheet.utils";

@Injectable()
export class TournamentService{
    
    constructor(private readonly googleService:GoogleUtils){}


    public async createForm(data:any){
        return await this.googleService.createGoogleForm(data)
    }

    public async getAllAtheletics(spreadsheetId:string , range: string):Promise<Athlete[]>{
        return await this.googleService.getAllAthletics(spreadsheetId,range);
    }
}