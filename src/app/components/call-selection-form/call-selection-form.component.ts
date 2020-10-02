import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CallsService} from '../../services/calls.service';
import {Agent, Call} from '../../interfaces';
import {Subscription} from 'rxjs';
import {MatSelectChange} from '@angular/material/select';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-call-selection-form',
  templateUrl: './call-selection-form.component.html',
  styleUrls: ['./call-selection-form.component.scss']
})
export class CallSelectionFormComponent implements OnInit, OnDestroy {

  form: FormGroup
  agentForm = new FormControl('')
  callForm = new FormControl({ value: '', disabled: !this.agentForm.value })

  agents: Agent[] = []
  calls: Call[] = []

  aSub: Subscription
  cSub: Subscription

  @Input() selectedCallId: string

  @Output() callSelected = new EventEmitter<string>()

  constructor(
    private callService: CallsService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      agent: this.agentForm,
      call: this.callForm
    })
  }

  ngOnInit(): void {
    this.aSub = this.callService.getAllAgents()
      .subscribe((agents) => this.agents = agents)
    if (this.selectedCallId) {
      this.callService.getAgentAndCallByCallId(this.selectedCallId)
        .subscribe((payload) => {
          this.form.patchValue({
            agent: payload.agent
          })
          this.agentSelected()
          this.form.patchValue({
            call: this.calls.find(x => x.callId === payload.call.callId)
          })

        })

    }
  }

  agentSelected() {
    if (!this.form.get('agent').value) {
      return
    }
    this.callForm.enable()
    this.cSub = this.callService.getCallsByAgentId(this.form.get('agent').value.agentId)
      .subscribe((calls) => this.calls = calls)
  }

  onCallSelected() {
    this.callSelected.emit(this.form.get('call').value.callId)
  }

  clearForm() {
    this.form.reset()
    this.callForm.disable()
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
    if (this.cSub) {
      this.cSub.unsubscribe()
    }
  }


}
