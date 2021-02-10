import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserslistPageRoutingModule } from './userslist-routing.module';

import { UserslistPage } from './userslist.page';
import { PibeModule } from '../../pipes/pibe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserslistPageRoutingModule,
    PibeModule
  ],
  declarations: [UserslistPage]
})
export class UserslistPageModule {}
