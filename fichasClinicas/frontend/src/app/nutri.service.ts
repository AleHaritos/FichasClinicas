import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { PacientesNutri } from './shared/pacientesNutri.model';
import { Profissional } from './shared/profissional.model';
import { retry, map, catchError } from "rxjs/operators"; 
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NutriService {

  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient,
              private snackbar: MatSnackBar) { }

  deletePacienteNutri(id: number): Observable<PacientesNutri> {
    return this.http.delete(`${this.url}/pacientesNutri/${id}`)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  getPacienteByDate(date: any): Observable<PacientesNutri[]> {
    return this.http.post(`${this.url}/pacientesNutri`, date)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e)))
  }

  agendarHorario(id: number, paciente: PacientesNutri): Observable<PacientesNutri> {
    return this.http.post(`${this.url}/pacientesNutri/${id}`, paciente)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  updateAgendamento(id: number, paciente: PacientesNutri): Observable<PacientesNutri> {
    return this.http.put(`${this.url}/pacientesNutri/${id}`, paciente)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  getPacienteNutriByID(id: number): Observable<PacientesNutri> {
    return this.http.get(`${this.url}/pacientesNutri/${id}`)
        .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e)))
  }

  getDetalhes(id: number): Observable<any> {
    return this.http.get(`${this.url}/pacientesDetalhes/${id}`)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  getNutricionistas(): Observable<Profissional[]> {
    return this.http.get(`${this.url}/nutricionistas`)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e)))
  }

  getNutricionistaByID(id: any): Observable<Profissional> {
    return this.http.get(`${this.url}/nutricionistas/${id}`)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e)))
  }

  openSnackbar(msg: string, cor: boolean): void {
    this.snackbar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: cor?['success-msg'] : ['error-msg']
    })
  }

  errorHandler(e: any): Observable<any>{
    this.openSnackbar('Ocorreu um erro', false)
    return EMPTY
  }
}
