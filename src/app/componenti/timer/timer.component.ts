import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DatiService } from 'src/app/servizi/dati.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  constructor (private dati:AuthService){}
  
  
  totalTime = ((this.dati.tokenData.exp*1000) - new Date().getTime()); // Tempo totale in secondi
 
  remainingTime = this.totalTime;

  intervalId: any;
  circumference = 2 * Math.PI * 32; // Circonferenza del cerchio
  strokeOffset = 0;

  ngOnInit() {
    this.startCountdown();
    console.log(this.totalTime)
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
        this.updateStrokeOffset();
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  updateStrokeOffset() {
    const progress = this.remainingTime / this.totalTime;
    this.strokeOffset = this.circumference * (1 - progress);
  }

  getFormattedTime(): string {
    const minutes = Math.floor(this.remainingTime / 60);
    const seconds = this.remainingTime % 60;
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}