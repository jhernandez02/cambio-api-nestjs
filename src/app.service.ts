import { Injectable, Inject } from '@nestjs/common';
import { Redis } from 'ioredis';
import { JwtService } from "@nestjs/jwt";
import { CambioDto } from './dto/cambio.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('RedisClient') private readonly redisClient: Redis
  ) {}

  async getToken(): Promise<{}> {
    const payload = { };
    const token = await this.jwtService.signAsync({payload});
    return {token};
  }

  async getAll(): Promise<object> {
    const result = await this.redisClient.keys("*");
    return result;
  }

  async save(data: CambioDto): Promise<string>{
    const result = await this.redisClient.set(data.moneda, JSON.stringify({tipo_cambio: data.tipo_cambio}));
    return result;
  }

  async getExchangeRates(data: Array<string>): Promise<object>{
    const result = await this.redisClient.mget(data);
    const json = {
      origen: JSON.parse(result[0]).tipo_cambio,
      destino: JSON.parse(result[1]).tipo_cambio,
    };
    return json;
  }

}
