import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Render,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ParamsInterceptor } from './params.interceptor';
import { CONFIG } from './config';
import { prepareAppData } from 'src/shared/utils/prepare-app-data';

let cnt = 0;

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  @UseInterceptors(ParamsInterceptor)
  home() {
    console.log('controller');
    return {};
  }

  @Get('favicon.ico')
  favicon() {
    return {};
  }

  @Get(':id')
  @Render('[id]')
  @UseInterceptors(ParamsInterceptor)
  public device() {
    console.log('device controller');
    return {};
  }

  @Get('/api/devices')
  public listdevices() {
    return this.appService.getDevices();
  }

  @Get('/api/devices/:id')
  public getDeviceById(@Param('id', new ParseIntPipe()) id: number) {
    return this.appService.getDevice(id);
  }

  @Get('/api/app-data/')
  public getAppData() {
    console.log('GET APP DATA  ', ++cnt);
    return prepareAppData(CONFIG);
  }
}
