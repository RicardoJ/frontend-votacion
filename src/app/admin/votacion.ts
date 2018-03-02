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

 selectedVoto: string = '';
 votos: any = [
   '1',
   '2',
   '3',
   '4',
   '5'
 ];



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

  radioChangeHandler (event: any) {
    //update the ui
    let numerodeVoto = this.selectedVoto = event.target.value
 
  alert("Acabas de votar por "+ numerodeVoto);
  }

  showvoto(){
    this.voto = !this.voto; 
  }

  




  
}
interface Icontact{
id: number;
name: string;
username :string;
address: {zipcode};
company: {name};

}