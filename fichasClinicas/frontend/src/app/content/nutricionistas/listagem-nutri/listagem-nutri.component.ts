import { Component, OnInit, ViewChild } from '@angular/core';
import { NutriService } from 'src/app/nutri.service';
import { PacientesService } from 'src/app/pacientes.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from 'src/app/shared/paciente.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listagem-nutri',
  templateUrl: './listagem-nutri.component.html',
  styleUrls: ['./listagem-nutri.component.css']
})
export class ListagemNutriComponent implements OnInit {
  
myGroup = new FormGroup({
  cpfControl: new FormControl('', [
    Validators.minLength(11),
    Validators.maxLength(11)
  ])
})
  //Controladores de view
  showTableAll: boolean = false
  showTableCPF: boolean = false
  showTableDate: boolean = false

  //Armazenamentos de dados
  dataSource!: MatTableDataSource<Paciente> 
  @ViewChild(MatPaginator) paginator!: MatPaginator;

 

  dia!: string
  constructor(private nutriService: NutriService,
              private pacienteService: PacientesService) {   
   }
  
  ngOnInit(): void { 
  }
  
  displayedColumns: string[] = ['id','nome', 'email', 'cpf', 'mais', 'agendar', 'delete'];
  displayedColumns2: string[] = ['id', 'nome', 'dia', 'hora', 'mais', 'agendar', 'delete']

   iniciarTabelaGeral(): void {
    this.pacienteService.getPacientes()
    .subscribe((res: any) => { 
      this.dataSource = new MatTableDataSource(res);
      setTimeout(() => this.dataSource.paginator = this.paginator) // para dar tempo de carregar os dados
      this.showTableAll = true
    }) 
  }

  iniciarTabelaCPF(): void {
    
    this.pacienteService.getPacienteByCPF({ cpf: this.myGroup.value.cpfControl })
      .subscribe((res: any) => {
        this.dataSource = new MatTableDataSource(res);
        setTimeout(() => this.dataSource.paginator = this.paginator)
        this.showTableCPF = true
      })

  }

  consultarPorData(): void {
    if(this.dia !== undefined) {

     this.dia = this.dia.toString() //Converter Date para string

      this.nutriService.getPacienteByDate({diaConsulta: this.dia})
        .subscribe((res: any) => {
          this.dataSource = new MatTableDataSource(res)
          setTimeout(() => this.dataSource.paginator = this.paginator)
          this.showTableDate = true
        })
    }
  }

  back(): void {
    this.showTableAll = false
    this.showTableCPF = false
    this.showTableDate = false

    this.myGroup.reset()
    this.dia = ''
  }
}
