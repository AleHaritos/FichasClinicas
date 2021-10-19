import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { PacientePsicologa } from './shared/pacientePsicologa.model';
import { Profissional } from './shared/profissional.model';

@Injectable({
  providedIn: 'root'
})
export class PsicologaService {

  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient,
              private snackbar: MatSnackBar) { }

  deletePacientePsicologa(id: number): Observable<PacientePsicologa> {
    return this.http.delete(`${this.url}/pacientesPsicologa/${id}`)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  getPacienteByDate(date: any): Observable<PacientePsicologa[]> {
    return this.http.post(`${this.url}/pacientesPsicologa`, date)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e)))
  }

  agendarHorario(id: number, paciente: PacientePsicologa): Observable<PacientePsicologa> {
    return this.http.post(`${this.url}/pacientesPsicologa/${id}`, paciente)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  updateAgendamento(id: number, paciente: PacientePsicologa): Observable<PacientePsicologa> {
    return this.http.put(`${this.url}/pacientesPsicologa/${id}`, paciente)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  getPacientePsicologaByID(id: number): Observable<PacientePsicologa> {
    return this.http.get(`${this.url}/pacientesPsicologa/${id}`)
        .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e)))
  }

  getDetalhes(id: number): Observable<any> {
    return this.http.get(`${this.url}/pacientesDetalhesPsicologa/${id}`)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  getPsicologas(): Observable<Profissional[]> {
    return this.http.get(`${this.url}/psicologas`)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e)))
  }

  getPsicologaByID(id: any): Observable<Profissional> {
    return this.http.get(`${this.url}/psicologas/${id}`)
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
