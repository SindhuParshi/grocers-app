import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.css']
})
export class TestServiceComponent implements OnInit {

  constructor(public service:UserService) { }

  user:any;

  ngOnInit(): void {
    this.user=this.service.getUser();
  }

}
