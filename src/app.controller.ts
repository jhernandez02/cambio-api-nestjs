import { Controller, UseGuards, Get, Post, Body, Put } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { TokenGuard } from './guard/token.guard';
import { CreateCambioDto } from './dto/create-cambio.dto';
import { RequestCambioDto } from './dto/request-cambio.dto ';
import { UpdateCambioDto } from './dto/update-cambio.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("token")
  @ApiResponse({ status: 200, description: 'The token has been successfully generated.'})
  getToken() {
    return this.appService.getToken();
  }

  @Post("change")
  @UseGuards(TokenGuard)
  @ApiResponse({ status: 200, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.'})
  change(@Body() requestCambioDto: RequestCambioDto) {
    return this.appService.change(requestCambioDto);
  }
  
  @Post()
  @UseGuards(TokenGuard)
  @ApiResponse({ status: 200, description: 'The request has been successfully responsed.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.'})
  create(@Body() createCambioDto: CreateCambioDto) {
    return this.appService.create(createCambioDto);
  }

  @Put()
  @UseGuards(TokenGuard)
  @ApiResponse({ status: 200, description: 'The record has been successfully updated.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.'})
  update(@Body() updateCambioDto: UpdateCambioDto) {
    return this.appService.update(updateCambioDto);
  }

}
