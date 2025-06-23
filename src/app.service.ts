import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Testing CI/CD Pipeline Again!';
  }
}
