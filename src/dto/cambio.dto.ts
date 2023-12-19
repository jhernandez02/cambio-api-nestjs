import { ApiProperty } from '@nestjs/swagger';

export class CambioDto {
    @ApiProperty({
        example: 'USD',
        required: true
    })
    moneda: string;

    @ApiProperty({
        example: 3.75,
        required: true
    })
    tipo_cambio: number;
}