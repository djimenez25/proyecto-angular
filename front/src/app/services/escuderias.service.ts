import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EscuderiasService {
  constructor(private httpClient: HttpClient) {}

  public escuderiaData = {
    name: '',
    pilots: '',
    car: '',
    country: '',
    id: '',
  };

  public clearEscuderia() {
    this.escuderiaData = {
      name: '',
      pilots: '',
      car: '',
      country: '',
      id: '',
    };
  }

  public editItem(item: any) {
    this.escuderiaData = item;
  }

  public getEscuderias() {
    return this.httpClient.get('http://localhost:3000/Escuderias');
  }

  public postEscuderias(newEscuderia: any) {
    return this.httpClient.post(
      'http://localhost:3000/Escuderias',
      newEscuderia
    );
  }

  public deleteEscuderia(escuderiaID: any) {
    return this.httpClient.delete(
      'http://localhost:3000/Escuderias/' + escuderiaID
    );
  }

  public editEscuderia(escuderiaID: any, editedEscuderia: any) {
    return this.httpClient.put(
      'http://localhost:3000/Escuderias/' + escuderiaID,
      editedEscuderia
    );
  }
}
