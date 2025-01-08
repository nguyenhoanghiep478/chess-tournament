import { IsString, IsNumber } from 'class-validator';

export class CreateAthleteDto {
  @IsString() name: string;
  @IsString() gmail: string;
  @IsNumber() phoneNumber: number;
  @IsString() university: string;
  @IsString() faculty: string;
  @IsNumber() studentId: number;
  @IsString() chessType: string;
}
