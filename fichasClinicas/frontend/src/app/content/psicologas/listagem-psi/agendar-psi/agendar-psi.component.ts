import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profissional } from 'src/app/shared/profissional.model';
import { PsicologaService } from 'src/app/psicologa.service';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { PacientePsicologa } from 'src/app/shared/pacientePsicologa.model';

@Component({
  selector: 'app-agendar-psi',
  templateUrl: './agendar-psi.component.html',
  styleUrls: ['./agendar-psi.component.css']
})
export class AgendarPsiComponent implements OnInit {

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();

      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }

    return '';
  }

 //Dados
 paciente: PacientePsicologa = {
  diaConsulta: '',
  hora: '',
  idPaciente: undefined,
  idPsicologa: undefined,
  remediosControlados: false,
}
id!: number
psicologas!: Profissional[]
validador: any
constructor(private psicoService: PsicologaService,
            private route: ActivatedRoute,
            private router: Router ) {  }

ngOnInit(): void {
  //Pegar ID por parametro
  this.route.params.subscribe((params: any) => {
   this.id =  params.id
   this.paciente.idPaciente = params.id
  })

  this.psicoService.getPacientePsicologaByID(this.id)
    .subscribe((res: any) => {
      this.validador = res
      
    })

  // Pegar lista de psicologas da clinica para select
  this.psicoService.getPsicologas()
    .subscribe((res: any) => {
      this.psicologas = res
    })
    
}

agendar(): void {
if(!this.validador) {
  this.paciente.diaConsulta = this.paciente.diaConsulta.toString() //Converter Date para String
  this.psicoService.agendarHorario(this.id, this.paciente)
    .subscribe((res) => res)

    this.router.navigate(["/psicologas/listagem"])
    this.psicoService.openSnackbar('Agendado com sucesso!', true)
} else {
  this.paciente.diaConsulta = this.paciente.diaConsulta.toString()
  this.psicoService.updateAgendamento(this.id, this.paciente)
    .subscribe((res) => res)
    
    this.router.navigate(["/psicologas/listagem"])
    this.psicoService.openSnackbar('Agendado com sucesso!', true)
}
}
 

back(): void {
  this.router.navigate(["/psicologas/listagem"])
}
}
