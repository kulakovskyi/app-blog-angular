import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../shared/interfaces";
import {PostService} from "../../shared/post.service";
import {AlertServices} from "../shared/services/alert.services";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit{

  form!: FormGroup

  constructor(private postsService: PostService,
              private alert: AlertServices) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required)
    })
  }

  submit() {
    if(this.form.invalid){
      return
    }
    const post: Post = {
      title: this.form.value.title,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date(),
    }

    this.postsService.create(post).subscribe(()=>{
      this.form.reset()
      this.alert.success('Пост был создан')
    })

  }
}
