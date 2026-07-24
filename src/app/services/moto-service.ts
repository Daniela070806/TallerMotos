import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moto } from '../model/moto';

@Injectable({
  providedIn: 'root',
})
export class MotoService {
  private http = inject(HttpClient);

  private API_MOTOS = '/api/motos';

  // Método GET
  getMotos(): Observable<Moto[]> {
    return this.http.get<Moto[]>(this.API_MOTOS);
  }

  // Método POST
  postMoto(moto: Moto): Observable<Moto> {
    return this.http.post<Moto>(
      `${this.API_MOTOS}/guardarMoto`,
      moto
    );
  }

  // Método PUT
  putMoto(id: number, moto: Moto): Observable<Moto> {
    return this.http.put<Moto>(
      `${this.API_MOTOS}/actualizarMoto/${id}`,
      moto
    );
  }

  // Método DELETE
  deleteMoto(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.API_MOTOS}/eliminarMoto/${id}`
    );
  }
}