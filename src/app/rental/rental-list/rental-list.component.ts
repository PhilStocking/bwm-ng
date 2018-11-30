import { Rental } from './../shared/rental.model';
import { RentalModule } from './../rental.module';
import { RentalService } from './../shared/rental.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals:  Rental[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    const rentalObervable =  this.rentalService.getRentals();
    rentalObervable.subscribe(
      (rentals: Rental[]) => {
        this.rentals = rentals;
      },
      (err) => {

      },
      () => {

      });
  }

}
