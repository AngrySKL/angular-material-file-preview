import { FilePreviewOverlayService } from './service/file-preview-overlay.service';
import { Component } from '@angular/core';
import { STATIC_FILE_DATE } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  files = STATIC_FILE_DATE;

  constructor(private filePreviewService: FilePreviewOverlayService) {}

  showPreview(file) {
    const dialogRef = this.filePreviewService.open({image: file});
  }
}
