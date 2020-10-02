import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {PendingPageComponent} from './components/pending-page/pending-page.component';
import {TranscriptAnalyzerComponent} from './components/transcript-analyzer/transcript-analyzer.component';

const routes: Routes = [
  { path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: '',
        component: PendingPageComponent
      },
      {
        path: 'transcript-analise/:callId',
        component: TranscriptAnalyzerComponent
      }
    ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
