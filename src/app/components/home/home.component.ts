import { Component, OnInit } from '@angular/core';

import { animation } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',

  
})
export class HomeComponent implements OnInit {
  title = 'Votaciones';

  //se ejecuta despues de Oninit, cualquier cosa hace que se ejecute
ngOnInit(){
  console.log("Home.component cargado!");

}
}
