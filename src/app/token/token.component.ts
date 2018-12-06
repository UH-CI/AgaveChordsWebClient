import { Component, OnInit } from '@angular/core';
import { Token } from '../token';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  token: Token = {
    auth_token: "ChangeMe"
  };
  
  constructor() {

   }

  ngOnInit() {
  }

}
