import { ApiProperty } from '@nestjs/swagger';

export class RequestCambioDto {
    @ApiProperty({
        example: '100.00',
        required: true
    })
    monto: number;

    @ApiProperty({
        example: 'USD',
        required: true
    })
    moneda_origen: string;

    @ApiProperty({
        example: 'PEN',
        required: true
    })
    moneda_destino: string;
}
  