import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PacientesService } from 'src/app/pacientes.service';
import { PsicologaService } from 'src/app/psicologa.service';
import { Paciente } from 'src/app/shared/paciente.model';

@Component({
  selector: 'app-listagem-psi',
  templateUrl: './listagem-psi.component.html',
  styleUrls: ['./listagem-psi.component.css']
})
export class ListagemPsiComponent implements OnInit {

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
    constructor(private psicoService: PsicologaService,
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
  
        this.psicoService.getPacienteByDate({diaConsulta: this.dia})
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
