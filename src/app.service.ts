import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * A simple "Hello, World!" endpoint that returns a string message.
   * @returns {string} A friendly greeting.
  */
  getHello(): string {
    console.log("say hello to every one!");
    return 'Hello World!';
  }
}
