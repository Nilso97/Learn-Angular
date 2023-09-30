import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export default class FirstComponentComponent implements OnInit {
  name: string = 'Nilso Junior';

  age: number = 25;

  hobbies = ['Tocar violão', 'Estudar Programação', 'Jogar vídeo-game'];

  car = {
    name: 'Polo',
    year: '2019',
  };

  constructor() {}

  ngOnInit(): void {}
}
