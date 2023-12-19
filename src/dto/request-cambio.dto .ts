import { IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RequestCambioDto {
    @ApiProperty({
        example: '100.00',
        required: true
    })
    @IsNotEmpty()
    @IsNumber()
    monto: number;

    @ApiProperty({
        example: 'USD',
        required: true
    })
    @IsNotEmpty()
    moneda_origen: string;

    @ApiProperty({
        example: 'PEN',
        required: true
    })
    @IsNotEmpty()
    moneda_destino: string;
}
  