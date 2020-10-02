import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(seconds: number): Date {
    const minutes = Math.floor(seconds / 60)
    const secondsTimer = seconds - minutes * 60
    const zeroTime = new Date(0)
    zeroTime.setMinutes(minutes)
    zeroTime.setSeconds(secondsTimer)
    return zeroTime;
  }

}
