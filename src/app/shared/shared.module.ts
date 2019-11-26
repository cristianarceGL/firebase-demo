import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../shared/material/material.module';

const toExport = [CommonModule, MaterialModule];

@NgModule({
  imports: [...toExport],
  exports: [...toExport],
  providers: [],
})
export class SharedModule {}
