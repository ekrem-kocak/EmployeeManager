import { NgModule } from '@angular/core';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [],
  imports: [DynamicDialogModule],
  exports: [DynamicDialogModule],
  providers: [DialogService],
})
export class PrimengModule {}
