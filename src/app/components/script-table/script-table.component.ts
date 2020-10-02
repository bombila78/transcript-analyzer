import {Component, Input, OnInit} from '@angular/core';
import {ScriptSentence} from '../../interfaces';
import {Style} from '@angular/cli/lib/config/schema';

@Component({
  selector: 'app-script-table',
  templateUrl: './script-table.component.html',
  styleUrls: ['./script-table.component.scss']
})
export class ScriptTableComponent {

  @Input() scripts: ScriptSentence[]
  @Input() expectedSimilarity: number

  displayedColumns: string[] = ['line', 'speaker', 'sentence']
  highlightedSentenceOrder: number

  pieStyles: any

  setHighlightedSentence(order: number) {
    this.highlightedSentenceOrder = order
  }

  isHighlighted(element: ScriptSentence) {
    return element.order === this.highlightedSentenceOrder
  }
}
