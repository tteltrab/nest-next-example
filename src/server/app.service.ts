import { Injectable, NotFoundException } from '@nestjs/common';
import { from, of, toArray } from 'rxjs';

const Devices = [
  { title: 'Arri SkyPanel S60-C', id: 1 },
  { title: 'Aputure LS 600c Pro', id: 2 },
  { title: 'Litepanels Gemini 2x1', id: 3 },
];

@Injectable()
export class AppService {
  getDevices() {
    return from(Devices).pipe(toArray());
  }

  getDevice(postId: number) {
    const device = Devices.find(({ id }) => id === postId);

    if (!device) {
      throw new NotFoundException();
    }

    return of(device);
  }
}
