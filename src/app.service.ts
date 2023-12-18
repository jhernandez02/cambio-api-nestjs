import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { CambioEntity } from './entities/cambio.entity';
import { CreateCambioDto } from './dto/create-cambio.dto';
import { RequestCambioDto } from './dto/request-cambio.dto ';
import { ResponseCambioDto } from './dto/response-cambio.dto';
import { UpdateCambioDto } from './dto/update-cambio.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly jwtService: JwtService
  ) {}

  async getToken() {
    const payload = { };
    const token = await this.jwtService.signAsync({payload});
    return {token};
  }

  async create(data: CreateCambioDto): Promise<CambioEntity>{
    const response = {
      id: 1,
      moneda: data.moneda,
      tipo_cambio: data.tipo_cambio
    };
    return response;
  }

  async change(data: RequestCambioDto): Promise<ResponseCambioDto>{
    const response = {
      monto: data.monto,
      monto_tipo_cambio: 375.00,
      moneda_origen: data.moneda_origen,
      moneda_destino: data.moneda_destino,
      tipo_cambio: 3.75
    }
    return response;
  }

  async update(data: CreateCambioDto): Promise<CambioEntity>{
    const response = {
      id: 1,
      moneda: data.moneda,
      tipo_cambio: data.tipo_cambio
    };
    return response;
  }
}
