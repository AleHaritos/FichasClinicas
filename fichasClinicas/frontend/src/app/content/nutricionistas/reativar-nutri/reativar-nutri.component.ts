import { Component, OnInit, ViewChild } from '@angular/core';
import { PacientesNutri } from 'src/app/shared/pacientesNutri.model';
import { PacientesService } from 'src/app/pacientes.service'; 
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Paciente } from 'src/app/shared/paciente.model';
@Component({
  selector: 'app-reativar-nutri',
  templateUrl: './reativar-nutri.component.html',
  styleUrls: ['./reativar-nutri.component.css']
})
export class ReativarNutriComponent implements OnInit {

  cpf!: string
  showTable: boolean = false
  paciente !: PacientesNutri


  dataSource!: MatTableDataSource<Paciente> 
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private pacienteService: PacientesService) { }

  ngOnInit(): void {
  }


  getTableAll(): void {
    this.pacienteService.getAllInativos()
      .subscribe((res: any) => {
        this.dataSource = new MatTableDataSource(res);
        setTimeout(() => this.dataSource.paginator = this.paginator)
        this.showTable = true
      })
  }

  getTableCpf(): void {
    if(this.cpf.length === 11) {
    this.pacienteService.getInativosByCPF({ cpf: this.cpf })
      .subscribe((res: any) => {
        this.dataSource = new MatTableDataSource(res);
        setTimeout(() => this.dataSource.paginator = this.paginator)
        this.showTable = true
      })
    }
  }

  back(): void {
    this.cpf = ''
    this.showTable = false
  }

  displayedColumns: string[] = ['id','nome', 'email', 'cpf', 'reativar'];
}
