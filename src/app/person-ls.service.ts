import { Injectable } from '@angular/core';
import { Person } from './person';

const KEY = 'data';

@Injectable({
  providedIn: 'root',
})
export class PersonLsService {
  constructor() {}

  public getAll(): Person[] {
    let people: Person[] = [];
    let data = localStorage.getItem(KEY);

    if (data) {
      people = JSON.parse(data) || [];
    }

    return people;
  }

  public getPerson(index: number): Person {
    const people = this.getAll();
    return people[index];
  }

  public addPerson(person: Person): void {
    let people = this.getAll();

    people.push(person);

    localStorage.setItem(KEY, JSON.stringify(people));
  }

  public deletePerson(index: number): void {
    let people = this.getAll();

    people.splice(index, 1);

    localStorage.setItem(KEY, JSON.stringify(people));
  }
}
