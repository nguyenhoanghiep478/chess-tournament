import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import axios from "axios";
import { google, sheets_v4 } from 'googleapis'
import { Athlete } from "src/tournament/entities/athlete.datatype";
@Injectable()
export class GoogleUtils {
    private sheets: sheets_v4.Sheets;
    private googleAppScriptsUrl: string = process.env.GOOGLE_APPSCRIPTS_URL
    constructor() {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });

        this.sheets = google.sheets({ version: "v4", auth: auth })
    }


    public async getAllAthletics(spreadsheetId: string, range: string): Promise<Athlete[]> {
        const response = await this.sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        })


        const rows = response.data.values;

        if (!rows || rows.length == 0) {
            return [];
        }

        const athletes: Athlete[] = rows.slice(1).map((row) => ({
            studentId: row[0],
            name: row[1] || '',
            gmail: row[2] || '',
            university: row[3] || '',
            faculty: row[4] || '',
            phoneNumber: row[5],
            chessType: row[6]
        }))

        const uniqueAthletes = this.removeDuplicate(athletes);

        return uniqueAthletes;
    }


    public async createGoogleForm(data:any):Promise<any>{
        try{
            console.log(process.env.GOOGLE_CLIENT_EMAIL)
            console.log(this.googleAppScriptsUrl)
            const response = await axios.post(this.googleAppScriptsUrl,data);
            return response.data
        }catch(e){
            throw new HttpException(
                `Failed to create form: ${e.message}`,
                HttpStatus.BAD_REQUEST
            )
        }
    }

    private removeDuplicate(athletes:Athlete[]):Athlete[]{
        const seen = new Map();

        return athletes.filter((athlete) => {
            const key = `${athlete.studentId}- ${athlete.gmail}`
            if(seen.has(key)){
                return false;
            }
            seen.set(key,true);
            return true;
        })
    }


}