import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PkSubscribeService } from '../pk-subscribe.service';

@Component({
  selector: 'pk-input-box',
  templateUrl: './pk-input-box.component.html',
  styleUrls: ['./pk-input-box.component.scss']
})
export class PkInputBoxComponent implements OnInit {
  subscribeData: any = <any>{};

  constructor(
    private pkSubscribeService: PkSubscribeService
  ) { }

  ngOnInit(): void {
  }

  subscribe(subscribeForm: NgForm) {
    if (subscribeForm.invalid) {
      return;
    }
    this.pkSubscribeService.subscribeToList(this.subscribeData)
      .subscribe(res => {
        alert('Subscribed!');
      }, err => {
        console.log(err);
      })
  }
}
