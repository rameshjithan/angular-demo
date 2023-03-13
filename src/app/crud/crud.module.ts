import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { CrudRoutingModule } from './crud-routing';
import { DataService } from '../dataservice/data.service';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,CrudRoutingModule,FormsModule],
  declarations: [CrudComponent,EditComponent],
})
export class CrudModule {}
