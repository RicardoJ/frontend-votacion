import { Component } from '@angular/core';
import{Router , ActivatedRoute, Params} from '@angular/router';

import {UserService} from '../services/user.service';

@Component({
  selector: 'home',
  templateUrl: './votacion.html',
  styleUrls: ['./votacion.css'],
  providers:[UserService] 
})
export class VotacionComponent { 
 voto: boolean;
 contacts: Icontact[];
 title: string;


  constructor(
    private userService : UserService,
    private _route : ActivatedRoute,
    private _router : Router,
  ){
this.voto= false;
this.userService.getContacts().subscribe(contacts=>{
this.contacts = contacts;
this.title = 'VOTACIÓN';

});
  }

  showvoto(){
    this.voto = !this.voto; 
  }
  votacionregistro(event){
    console.log("You pressed button: " + event)
  }




  
}
interface Icontact{
id: number;
name: string;
username :string;
address: {zipcode};
company: {name};

}