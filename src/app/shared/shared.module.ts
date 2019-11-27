import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '~shared/material/material.module';

const toExport = [CommonModule, MaterialModule, FlexLayoutModule];

@NgModule({
  imports: [...toExport],
  exports: [...toExport],
  providers: [],
})
export class SharedModule {}
