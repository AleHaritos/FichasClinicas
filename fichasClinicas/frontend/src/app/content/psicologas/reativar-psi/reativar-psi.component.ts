import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PacientesService } from 'src/app/pacientes.service';
import { Paciente } from 'src/app/shared/paciente.model';

@Component({
  selector: 'app-reativar-psi',
  templateUrl: './reativar-psi.component.html',
  styleUrls: ['./reativar-psi.component.css']
})
export class ReativarPsiComponent implements OnInit {

  cpf!: string
  showTable: boolean = false


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
