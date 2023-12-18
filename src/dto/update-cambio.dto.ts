import { ApiProperty } from '@nestjs/swagger';

export class UpdateCambioDto {
    @ApiProperty({
        example: 'USD',
        required: true
    })
    moneda: string;

    @ApiProperty({
        example: 3.78,
        required: true
    })
    tipo_cambio: number;
}