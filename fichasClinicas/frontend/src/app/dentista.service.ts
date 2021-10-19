import { Injectable } from '@angular/core';
import { PacienteDentista } from './shared/pacienteDentista.model';
import { Profissional } from './shared/profissional.model';
import { Observable, EMPTY } from 'rxjs';
import { retry, map, catchError } from "rxjs/operators"; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DentistaService {

  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient,
              private snackbar: MatSnackBar) { }

  deletePacienteDentista(id: number): Observable<PacienteDentista> {
    return this.http.delete(`${this.url}/pacientesDentista/${id}`)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  getPacienteByDate(date: any): Observable<PacienteDentista[]> {
    return this.http.post(`${this.url}/pacientesDentista`, date)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e)))
  }

  agendarHorario(id: number, paciente: PacienteDentista): Observable<PacienteDentista> {
    return this.http.post(`${this.url}/pacientesDentista/${id}`, paciente)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  updateAgendamento(id: number, paciente: PacienteDentista): Observable<PacienteDentista> {
    return this.http.put(`${this.url}/pacientesDentista/${id}`, paciente)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  getPacienteDentistaByID(id: number): Observable<PacienteDentista> {
    return this.http.get(`${this.url}/pacientesDentista/${id}`)
        .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e)))
  }

  getDetalhes(id: number): Observable<any> {
    return this.http.get(`${this.url}/pacientesDetalhesDentista/${id}`)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  getDentistas(): Observable<Profissional[]> {
    return this.http.get(`${this.url}/dentistas`)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e)))
  }

  getDentistaByID(id: any): Observable<Profissional> {
    return this.http.get(`${this.url}/dentistas/${id}`)
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
