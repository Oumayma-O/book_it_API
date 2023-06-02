import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber, IsOptional,
  IsPhoneNumber,
  IsString,
  Max,
  Min
} from "class-validator";

export class RegisterHotelDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  @Min(1)
  @Max(5)
  stars: number;

  @IsOptional()
  @IsString()
  photo?: string;
}
