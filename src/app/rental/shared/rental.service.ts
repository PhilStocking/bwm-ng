import { Rental } from './rental.model';
import { Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class RentalService {
    private rentals: Rental[] = [{
        id: "1",
        title: "Central Apartment 1",
        city: "New York",
        street: "Times Sqaure",
        catagory: "Apartment",
        image: "http://via.placeholder.com/350/250",
        bedrooms: 3,
        description: "Very Nice Apartment 1",
        dailyRate: 34,
        shared: false,
        createdAt: "24/11/2018"
      },
      {
        id: "2",
        title: "Central Apartment 2",
        city: "New Spork",
        street: "Times Sqaure",
        catagory: "Apartment",
        image: "http://via.placeholder.com/350/250",
        bedrooms: 3,
        description: "Very Nice Apartment 2",
        dailyRate: 34,
        shared: true,
        createdAt: "24/11/2018"
      },
      {
        id: "3",
        title: "Central Apartment 3",
        city: "New Talk",
        street: "Times Sqaure",
        catagory: "Apartment",
        image: "http://via.placeholder.com/350/250",
        bedrooms: 3,
        description: "Very Nice Apartment 3",
        dailyRate: 34,
        shared: false,
        createdAt: "24/11/2018"
      },
      {
        id: "4",
        title: "Central Apartment 4",
        city: "Spork York",
        street: "Times Sqaure",
        catagory: "Apartment",
        image: "http://via.placeholder.com/350/250",
        bedrooms: 3,
        description: "Very Nice Apartment 4",
        dailyRate: 34,
        shared: false,
        createdAt: "24/11/2018"
      }];

      public getRentalById(rentalId: string): Observable<Rental> {

        return new Observable<Rental>((observer) => {

          setTimeout(() => {
            const foundRental = this.rentals.find((rental) => {
              return rental.id == rentalId;
            });

            observer.next(foundRental);
          }, 500);
        });
      }

      /**
       * getRentals
       */
      public getRentals(): Observable<Rental[]> {
        return new Observable<Rental[]>((observer) => {
          setTimeout(() => {
            observer.next(this.rentals);
          }, 1000);
        });
      }
}
