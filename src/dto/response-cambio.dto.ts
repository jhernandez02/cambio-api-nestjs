import { ApiProperty } from '@nestjs/swagger';

export class ResponseCambioDto {
    @ApiProperty({
        example: '100.00',
        required: true
    })
    monto: number;

    @ApiProperty({
        example: '375.00',
        required: true
    })
    monto_tipo_cambio: number;

    @ApiProperty({
        example: 'PEN',
        required: true
    })
    moneda_origen: string;

    @ApiProperty({
        example: 'USD',
        required: true
    })
    moneda_destino: string;

    @ApiProperty({
        example: '3.75',
        required: true
    })
    tipo_cambio: number;
}