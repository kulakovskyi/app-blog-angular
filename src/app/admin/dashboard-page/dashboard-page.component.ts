import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {PostService} from "../../shared/post.service";
import {Post} from "../../shared/interfaces";
import {Subscription} from "rxjs";
import {AlertServices} from "../shared/services/alert.services";
import {ModalComponent} from "../shared/modal/modal.component";


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy{

  posts: Post[] = []
  pSub!: Subscription
  dSub!: Subscription
  searchStr  = ''
  constructor(private postService: PostService,
              private alert: AlertServices,
              private resolver: ViewContainerRef) {
  }

  ngOnInit() {
    this.pSub = this.postService.getAll().subscribe(posts => {
      this.posts = posts
    })
  }


  // remove(id: string ) {
  //   this.dSub = this.postService.remove(id).subscribe(() => {
  //     this.posts = this.posts.filter(post => post.id !== id)
  //     this.alert.warning('Пост был удален')
  //   })
  // }

  ngOnDestroy() {
    if(this.pSub){
      this.pSub.unsubscribe()
    }
    if(this.dSub){
      this.dSub.unsubscribe()
    }
  }

  showModal(id:string) {
    const modalFactory
      = this.resolver.createComponent(ModalComponent,{})
    modalFactory.instance.title = 'Удалить пост'
    modalFactory.instance.text = 'Действительно хотите удалить пост?'
    modalFactory.instance.onCloseModal.subscribe(() => {
      this.resolver.clear()
    })
    modalFactory.instance.onDeletePost.subscribe(() => {
      this.resolver.clear()
      this.dSub = this.postService.remove(id).subscribe(() => {
        this.posts = this.posts.filter(post => post.id !== id)
        this.alert.warning('Пост был удален')
      })
    })
  }
}
