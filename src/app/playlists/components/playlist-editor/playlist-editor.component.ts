import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Playlist } from '../playlist-list/Playlist';
import { NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrls: ['./playlist-editor.component.scss'],
})
export class PlaylistEditorComponent {
  @Input() playlist?: Playlist;

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<Playlist>();

  cancelClick() {
    this.cancel.emit();
  }

  @ViewChild('formRef', { read: NgForm, static: false })
  formRef?: NgForm;

  ngAfterViewInit(): void {
    this.formRef?.setValue({});
  }

  submit(formRef: NgForm) {
    const draft = {
      ...this.playlist,
      ...formRef.value,
    };
    this.save.emit(draft);
  }
}
