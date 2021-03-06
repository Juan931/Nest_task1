import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './healt/healt.controller';


@Module({
  imports: [
    
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '..', 'public'),
      }),
    
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
