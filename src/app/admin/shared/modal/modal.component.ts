import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title = 'Default title'
  @Input() text = 'Default text'
  @Output() onCloseModal = new EventEmitter
  @Output() onDeletePost = new EventEmitter

  closeModal() {
    this.onCloseModal.emit()
  }

  deletePost() {
    this.onDeletePost.emit()
  }
}
