import { Injectable } from '@angular/core';
import { Participants } from '../domain/participants';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor() { }

  getAll():Participants[]{
    return [
      {'numero':'P100',
       'nom': 'Sami',
       'age' : 25
      },
      {'numero':'P100',
      'nom': 'ghada',
      'age' : 25
     },
     {'numero':'P100',
     'nom': 'Marwene',
     'age' : 25
    }];
  }
}
