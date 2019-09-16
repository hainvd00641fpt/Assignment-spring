import { Component, OnInit } from '@angular/core';
import {Make} from '../../make';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MakeService} from '../../service/make.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-make',
  templateUrl: './create-make.component.html',
  styleUrls: ['./create-make.component.css']
})
export class CreateMakeComponent implements OnInit {

  make: Make;
  form: FormGroup;
  formControls = {
    name: [null],
    description: [null],
    createAt: [null],
    updateAt: [null],
    status: [null]
  };
  constructor(private formBuilder: FormBuilder, private makeService: MakeService) { }

  ngOnInit() {
    this.form = this.formBuilder.group(this.formControls);
  }

  doSubmit() {
    this.make = new Make(this.form.get('name').value,
      this.form.get('description').value,
      this.form.get('createAt').value,
      this.form.get('updateAt').value,
      this.form.get('status').value);
    console.log('hello');
    let observable: Observable<Make>;
    observable = this.makeService.saveMake(this.make);
    observable
      .subscribe({
        next: value => {
          console.log(value);
        }
      });
  }

}
