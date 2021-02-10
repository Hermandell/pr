import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

profileId:string;
perfilpersonaje:any[];
nodata:string;

  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {




this.profileId=this.activatedRoute.snapshot.paramMap.get('char_id')
this.http.get<any>('https://breakingbadapi.com/api/characters/'+this.profileId)
.subscribe(res=>{
this.perfilpersonaje=res;

// console.log(res);



if(res.birthday='Unknown')
{
res.birthday=''
this.nodata=res.birthday
// console.log(this.nodata);

}

})

}



}
