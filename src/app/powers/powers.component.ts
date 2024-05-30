import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor, UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PowersService } from './powers.service';
import { Power } from './power';

@Component({
  selector: 'app-powers',
  standalone: true,
  imports: [
    NgFor,
    UpperCasePipe,
    RouterModule
  ],
  templateUrl: './powers.component.html',
  styleUrl: './powers.component.css'
})
export class PowersComponent {
  powers: Power[] = [];

  constructor(
    private powersService : PowersService,
  ) {}

  ngOnInit(): void {
    this.getPowers();
  }


  getPowers(): void {
    this.powersService.getAll()
      .subscribe(powers => this.powers = powers)
  }
}
