import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable()
export class InMemoryDataServiceService extends InMemoryDbService {

  createDb(){
    const heroes = [
      { id: 1, name: 'Shaktiman' },
      { id: 2, name: 'Junior G' },
      { id: 3, name: 'Aryaman' },
      { id: 4, name: 'Superman' },
      { id: 5, name: 'Hanuman' },
      { id: 6, name: 'Chota Bheem' },
      { id: 7, name: 'Pad Man' }
    ];
    return {heroes};
  };
}
