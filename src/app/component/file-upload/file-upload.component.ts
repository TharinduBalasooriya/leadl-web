
import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',

  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  @Input() multiple: boolean = true;
  @Input() fileType: string = '';
  @Input() dragDropEnabled = true;
  @Output() filesChanged: EventEmitter<FileList>;

   // @ts-ignore
  @ViewChild('fileInput') inputRef: ElementRef<HTMLInputElement>;

  

  constructor() {
    this.filesChanged = new EventEmitter();
  }

  // @ts-ignore
addFiles(files:any ): void {
    console.log(files);
    this.filesChanged.emit(files);
  }

  handleFileDrop(event: DragEvent) {
    if (event?.dataTransfer?.files?.length) {
      const files = event.dataTransfer.files;
      this.inputRef.nativeElement.files = files;
      this.addFiles(files);
    }
  }

}
