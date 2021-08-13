import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './healt/healt.controller';
import { ClientController } from './client/client.controller';

@Module({
  imports: [
    
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '..', 'client'),
      }),
    
  ],
  controllers: [AppController, HealthController, ClientController],
  providers: [AppService],
})
export class AppModule {}
