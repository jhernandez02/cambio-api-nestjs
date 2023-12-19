import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { redisClientFactory } from './factory/redis-client-factory';
import { jwtConstants } from "./constants/jwt.constant";

@Module({
  imports: [JwtModule.register({ secret: jwtConstants.secret, signOptions: { expiresIn: "1d" } })],
  controllers: [AppController],
  providers: [
    AppService, 
    redisClientFactory,
  ],
})
export class AppModule {}
