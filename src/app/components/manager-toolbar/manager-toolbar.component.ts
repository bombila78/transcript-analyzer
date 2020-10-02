import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationStart, ParamMap, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {LocalstorageService} from '../../services/localstorage.service';
import {log} from 'util';
import {CallSelectionFormComponent} from '../call-selection-form/call-selection-form.component';

@Component({
  selector: 'app-manager-toolbar',
  templateUrl: './manager-toolbar.component.html',
  styleUrls: ['./manager-toolbar.component.scss']
})
export class ManagerToolbarComponent implements OnInit, OnDestroy {

  selectedCallId: string
  routerSub: Subscription

  @ViewChild('callSelectionFormComponent') callForm: CallSelectionFormComponent

  constructor(
    private router: Router,
    private localStorageService: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.selectedCallId = this.localStorageService.getAttribute('selectedCallId')
    this.routerSub = this.router.events.subscribe((event: NavigationStart) => {
      if (event.url === '/') {
        this.selectedCallId = null
        this.callForm.clearForm()
      }
    })
  }

  onCallSelected(callId: string) {
    this.selectedCallId = callId
    this.localStorageService.setAttribute('selectedCallId', this.selectedCallId)
    this.router.navigate(['transcript-analise', callId])
  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe()
    }
  }

}
