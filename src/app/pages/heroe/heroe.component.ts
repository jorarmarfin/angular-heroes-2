import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();

  constructor(private heroesServices:HeroesService) { }

  ngOnInit(): void {
  }
  guardar(form: NgForm){
    if (form.invalid) {
      console.log('Formulario invalido');
      return;
    }
    this.heroesServices.crearHeroe(this.heroe)
                       .subscribe(resp=>{
                         console.log(resp);
                         this.heroe = resp;
                       })

  }

}
