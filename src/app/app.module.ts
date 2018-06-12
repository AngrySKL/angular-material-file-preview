import { FilePreviewOverlayService } from './service/file-preview-overlay.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatListModule, MatIconModule, MatToolbarModule, MatProgressSpinnerModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FilePreviewOverlayComponent } from './component/file-preview-overlay/file-preview-overlay.component';
import { FilePreviewOverlayToolbarComponent } from './component/file-preview-overlay-toolbar/file-preview-overlay-toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    FilePreviewOverlayComponent,
    FilePreviewOverlayToolbarComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    OverlayModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    FilePreviewOverlayComponent
  ],
  providers: [
    FilePreviewOverlayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
