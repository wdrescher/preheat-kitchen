import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PkSubscribeService } from '../pk-subscribe.service';

@Component({
  selector: 'pk-input-box',
  templateUrl: './pk-input-box.component.html',
  styleUrls: ['./pk-input-box.component.scss']
})
export class PkInputBoxComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private pkSubscribeService: PkSubscribeService, 
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      creator: ['']
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.submitted = true; 
    this.pkSubscribeService.subscribeToList(this.registerForm.value["email"], this.registerForm.value["creator"]).subscribe(); 
  }
}
