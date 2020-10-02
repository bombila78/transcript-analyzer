import { NgModule } from '@angular/core'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';

const angularMaterial = [
  MatToolbarModule,
  MatSelectModule,
  MatSliderModule,
  MatIconModule,
  MatTableModule,
  MatGridListModule,
  MatTooltipModule
]

@NgModule({
  imports: [...angularMaterial],
  exports: [...angularMaterial]
})
export class MaterialModule { }
