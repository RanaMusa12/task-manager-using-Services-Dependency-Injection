import { Injectable } from '@angular/core';
import { timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {


  log(message: string): void {
   const timestamp =new Date().toLocaleTimeString();
    console.log(`[${new Date().toLocaleTimeString()}] ${message}`);
}

}