import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export default class ListRenderComponent implements OnInit {
  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {}

  animals: Animal[] = [];

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O ${animal.type} ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animal) => (this.animals = animal));
  }
}