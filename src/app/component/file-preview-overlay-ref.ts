import { OverlayRef } from '@angular/cdk/overlay';
import { FilePreviewOverlayComponent } from './file-preview-overlay/file-preview-overlay.component';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { filter, take } from 'rxjs/operators';

export class FilePreviewOverlayRef {
  componentInstance: FilePreviewOverlayComponent;
  private _beforeClose = new Subject<void>();
  private _afterClosed = new Subject<void>();

  constructor(private overlayRef: OverlayRef) {}

  close() {
    this.componentInstance.animationStateChanged.pipe(
      filter(event => event.phaseName === 'start'),
      take(1)
    ).subscribe(() => {
      this._beforeClose.next();
      this._beforeClose.complete();
      this.overlayRef.detachBackdrop();
    });

    this.componentInstance.animationStateChanged.pipe(
      filter(event => event.phaseName === 'done' && event.toState === 'leave'),
      take(1)
    ).subscribe(() => {
      this.overlayRef.dispose();
      this._afterClosed.next();
      this._afterClosed.complete();

      this.componentInstance = null;
    });

    this.componentInstance.startExitAnimation();
  }

  afterClosed(): Observable<void> {
    return this._afterClosed.asObservable();
  }

  beforeClose(): Observable<void> {
    return this._beforeClose.asObservable();
  }
}
