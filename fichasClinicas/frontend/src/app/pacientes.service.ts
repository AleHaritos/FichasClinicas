import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { Paciente } from './shared/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient,
              private snackbar: MatSnackBar) { }

  salvarPaciente(paciente: Paciente ): Observable<Paciente> {
    return this.http.post(`${this.url}/pacientes`, paciente)
    .pipe(
      map((res: any) => res ),
      catchError(e => this.errorHandler(e)))
  }

  getPacientes(): Observable<Paciente[]> {
    return this.http.get(`${this.url}/pacientes`)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e)))
  }

  getPacienteByID(id: number): Observable<Paciente> {
    return this.http.get(`${this.url}/pacientes/${id}`)
        .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e)))
  }

  deletePaciente(id: number): Observable<Paciente> {
    return this.http.delete(`${this.url}/pacientes/${id}`)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  getAllInativos(): Observable<Paciente> {
    return this.http.get(`${this.url}/inativos`)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  getInativoById(id: number): Observable<Paciente> {
    return this.http.get(`${this.url}/inativos/${id}`)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  getInativosByCPF(cpf: any): Observable<Paciente> {
    return this.http.post(`${this.url}/inativos`, cpf)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }

  softDelete(id: number, status: any): Observable<Paciente> {
    return this.http.put(`${this.url}/pacientes/${id}`, status)
      .pipe(
        retry(8),
        map((res: any) => res),
        catchError(e => this.errorHandler(e))
      )
  }
  
  getPacienteByCPF(cpf: any): Observable<Paciente> {
    return this.http.post(`${this.url}/pacientes/cpf`, cpf)
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
