import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalstorageService} from '../../services/localstorage.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private router: Router,
    private localStorageService: LocalstorageService
  ) { }

  ngOnInit(): void {
  }

  navigateToMain() {
    this.localStorageService.clearStorage()
    this.router.navigate(['/'])
  }
}
