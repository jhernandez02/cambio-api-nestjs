import { Controller, UseGuards, Get, Post, Body, Put } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { TokenGuard } from './guard/token.guard';
import { CambioDto } from './dto/cambio.dto';
import { RequestCambioDto } from './dto/request-cambio.dto ';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("token")
  @ApiResponse({ status: 200, description: 'The token has been successfully generated.'})
  getToken() {
    try {
      return this.appService.getToken();
    } catch (error) {
      return {
        menssage: "Error al generar token",
        error
      }
    }
  }

  @Get()
  @UseGuards(TokenGuard)
  @ApiResponse({ status: 200, description: 'The request has been successfully responsed.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.'})
  async getCurrencies() {
    try {
      const result = await this.appService.getAll();
      return result;
    } catch (error) {
      return {
        menssage: "Error al obtener listado de divisas",
        error
      }
    }
  }

  @Post("change-currency")
  @UseGuards(TokenGuard)
  @ApiResponse({ status: 200, description: 'The request has been successfully responsed.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.'})
  async changeCurrency(@Body() body: RequestCambioDto) {
    try {
      const { monto, moneda_origen, moneda_destino } = body; 
      const tc:any = await this.appService.getExchangeRates([moneda_origen,moneda_destino]);
      const tipo_cambio = tc.origen/tc.destino;
      const monto_tipo_cambio = monto*tipo_cambio;
      const response = {
        monto: monto,
        monto_tipo_cambio,
        moneda_origen: moneda_origen,
        moneda_destino:moneda_destino,
        tipo_cambio
      };
      return response;
    } catch (error) {
      return {
        menssage: "Error al cambiar las divisas",
        error
      }
    }
  }
  
  @Post()
  @UseGuards(TokenGuard)
  @ApiResponse({ status: 200, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.'})
  async create(@Body() body: CambioDto) {
    try {
      const { moneda, tipo_cambio } = body; 
      await this.appService.save(body);
      const response = {
        moneda,
        tipo_cambio,
      };
      return response;
    } catch (error) {
      return {
        menssage: "Error al crear la divisa",
        error
      }
    }
  }

  @Put()
  @UseGuards(TokenGuard)
  @ApiResponse({ status: 200, description: 'The record has been successfully updated.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.'})
  async update(@Body() body: CambioDto) {
    try {
      const { moneda, tipo_cambio } = body; 
      await this.appService.save(body);
      const response = {
        moneda,
        tipo_cambio,
      };
      return response;
    } catch (error) {
      return {
        menssage: "Error al actualizar el tipo de cambio",
        error
      }
    }
  }

}
