import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor, UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { switchMap } from 'rxjs';

import { Hero } from './hero';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { HeroService } from './hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    NgFor,
    HeroDetailsComponent,
    UpperCasePipe,
    RouterModule
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  @ViewChild('confirmationDialog') confirmationDialog!: ElementRef<HTMLDialogElement>;

  heroes : Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;

    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  onDeleteHero(): void{
    this.heroService.delete(this.selectedHero?.id).pipe(
      switchMap(() => this.heroService.getHeroes())
    ).subscribe(heroes => this.heroes = heroes);

    this.close();
  }

  open(hero: Hero) {
    this.selectedHero = hero;

    this.confirmationDialog.nativeElement.showModal();
  }

  close() {
    this.confirmationDialog.nativeElement.close();
  }
}
