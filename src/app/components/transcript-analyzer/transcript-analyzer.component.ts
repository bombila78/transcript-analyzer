import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CallsService} from '../../services/calls.service';
import {CallDetails} from '../../interfaces';
import {switchMap} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {ScriptTableComponent} from '../script-table/script-table.component';
import {TranscriptAnalyserService} from '../../services/transcript-analyser-service.service';

@Component({
  selector: 'app-transcript-analyzer',
  templateUrl: './transcript-analyzer.component.html',
  styleUrls: ['./transcript-analyzer.component.scss']
})
export class TranscriptAnalyzerComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('scriptTable') scriptTable: ScriptTableComponent

  callDetails: CallDetails
  expectedSimilarity: number
  realSimilarity: number

  cDSub: Subscription
  sSub: Subscription

  constructor(
    private route: ActivatedRoute,
    private callService: CallsService,
    private transcriptService: TranscriptAnalyserService
  ) {
  }

  ngOnInit(): void {
    this.cDSub = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.callService.getCallDetailsById(params.callId)
      })
    ).subscribe((cD) => this.callDetails = cD)
    this.updateExpectedSimilarity(38)
    this.updateRealSimilarity(38)
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.transcriptService.getSensitivity()
        .subscribe(value => {
          this.updateExpectedSimilarity(value)
          this.updateRealSimilarity(value)
        })
    })

  }

  updateExpectedSimilarity(sensitivity: number) {
    const scriptsCount = this.callDetails.script.length
    const coveredScripts = this.callDetails.script
      .filter(x => x.similarity * 100 >= sensitivity)
      .length

    this.expectedSimilarity = Math.round(coveredScripts / scriptsCount * 100)
  }

  updateRealSimilarity(sensitivity: number) {
    const scriptsCount = this.callDetails.transcript.length
    const coveredScripts = this.callDetails.transcript
      .filter(x => x.similarity * 100 >= sensitivity)
      .length

    this.realSimilarity = Math.round(coveredScripts / scriptsCount * 100)
  }

  matchedSentenceHovered(order: number) {
    this.scriptTable.setHighlightedSentence(order)
  }

  ngOnDestroy() {
    if (this.cDSub) {
      this.cDSub.unsubscribe()
    }
    if (this.sSub) {
      this.sSub.unsubscribe()
    }
  }
}
