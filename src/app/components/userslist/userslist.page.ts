import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {

personajes:any[]=[];
textoBuscar='';
  constructor(private http:HttpClient) { }

  ngOnInit() {



    this.getpersonajes()
      .subscribe(personajesdatos => {

// console.log(personajesdatos);

this.personajes=personajesdatos;
      });

  }


  buscar(event)
  {

    // console.log(event);
this.textoBuscar=event.detail.value;
  }

  getpersonajes(){
    return this.http.get<any>('https://breakingbadapi.com/api/characters');
  }

}
