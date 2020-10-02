import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Agent, CallDetails, ScriptSentence, TranscriptSentence} from '../../interfaces';
import {CallsService} from '../../services/calls.service';
import {Subscription} from 'rxjs';
import {TranscriptAnalyserService} from '../../services/transcript-analyser-service.service';

@Component({
  selector: 'app-transcript-table',
  templateUrl: './transcript-table.component.html',
  styleUrls: ['./transcript-table.component.scss']
})
export class TranscriptTableComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['time', 'speaker', 'sentence']
  agent: Agent
  aSub: Subscription
  sSub: Subscription
  sensitivity: number = 38

  @Input() callDetails: CallDetails
  @Input() realSimilarity: number

  @Output() matchedSentenceHovered = new EventEmitter<number>()

  constructor(
    private callSerivce: CallsService,
    private transcriptAnalyserService: TranscriptAnalyserService
  ) {
  }
  ngOnInit() {
    this.aSub = this.callSerivce.getAgentById(this.callDetails.agent.agentId)
      .subscribe((agent) => {
        this.agent = agent
      })
    this.sSub = this.transcriptAnalyserService.getSensitivity()
      .subscribe(value => {
        this.sensitivity = value
      })
  }

  getSpeakerName(channelNo: number) {
    const isCustomer = this.callDetails.customer.channelNo === channelNo
    if (isCustomer) {
      return this.callDetails.customer.fullName.split(' ')[0]
    }
    const isAgent = this.callDetails.agent.channelNo === channelNo
    if (isAgent) {
      return this.agent.fullName.split(' ')[0]
    }
    return 'Unknown'
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
    if (this.sSub) {
      this.sSub.unsubscribe()
    }
  }

  getTooltipText(element: TranscriptSentence) {
    if (!element.matchingSentence) {
      return
    }
    if (element.similarity * 100 < this.sensitivity) {
      return
    }
    const similarSentenceOrder = this.callDetails.script
      .find(x => x.sentence === element.matchingSentence)
      .order + 1

    return `
    ${element.similarity * 100}% matching with line #${similarSentenceOrder}
    "${element.matchingSentence}"
    `
  }

  onMouseOverSentence(element: TranscriptSentence) {
    if (!element.matchingSentence) {
      return
    }
    if (element.similarity * 100 < this.sensitivity) {
      return
    }

    const similarSentenceOrder = this.callDetails.script
      .find(x => x.sentence === element.matchingSentence)
      .order

    this.matchedSentenceHovered.emit(similarSentenceOrder)
  }
}
