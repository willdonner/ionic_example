import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man', 
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo' 
  ];
  itemSelected(item:String){
    console.log("Slected item",item)
  }
  constructor(public navCtrl: NavController) {

  }

}
