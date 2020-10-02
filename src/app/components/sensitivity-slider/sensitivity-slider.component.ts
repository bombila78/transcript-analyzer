import { Component, OnInit } from '@angular/core';
import {TranscriptAnalyserService} from '../../services/transcript-analyser-service.service';

@Component({
  selector: 'app-sensitivity-slider',
  templateUrl: './sensitivity-slider.component.html',
  styleUrls: ['./sensitivity-slider.component.scss']
})
export class SensitivitySliderComponent {

  sensitivity = 38

  constructor(
    private transcriptService: TranscriptAnalyserService
  ) {
    this.transcriptService.setSensitivity(this.sensitivity)
  }
  onSensitivityChange($event: number) {
    this.transcriptService.setSensitivity($event)
  }
}
