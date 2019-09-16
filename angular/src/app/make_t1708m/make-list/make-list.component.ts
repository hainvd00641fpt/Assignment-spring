import { Component, OnInit } from '@angular/core';
import {Make} from '../../make';
import {MakeService} from '../../service/make.service';

@Component({
  selector: 'app-make-list',
  templateUrl: './make-list.component.html',
  styleUrls: ['./make-list.component.css']
})
export class MakeListComponent implements OnInit {

  makes: Make[];
  constructor(private  makeService: MakeService) { }

  ngOnInit() {
   this.makeService.listMake().subscribe({
     next: value => {
       this.makes = value;
     }
   });
  }

}
