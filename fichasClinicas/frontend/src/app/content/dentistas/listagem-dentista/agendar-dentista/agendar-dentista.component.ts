import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profissional } from 'src/app/shared/profissional.model';
import { DentistaService } from 'src/app/dentista.service';
import { PacienteDentista } from 'src/app/shared/pacienteDentista.model';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-agendar-dentista',
  templateUrl: './agendar-dentista.component.html',
  styleUrls: ['./agendar-dentista.component.css']
})
export class AgendarDentistaComponent implements OnInit {

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();

      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }

    return '';
  }

 //Dados
 paciente: PacienteDentista = {
  diaConsulta: '',
  hora: '',
  idPaciente: undefined,
  idDentista: undefined,
  fumante: false,
  endereco: ''
}
id!: number
dentistas!: Profissional[]
validador: any
constructor(private dentistaService: DentistaService,
            private route: ActivatedRoute,
            private router: Router ) {  }

ngOnInit(): void {
  //Pegar ID por parametro
  this.route.params.subscribe((params: any) => {
   this.id =  params.id
   this.paciente.idPaciente = params.id
  })

  this.dentistaService.getPacienteDentistaByID(this.id)
    .subscribe((res: any) => {
      this.validador = res
      
    })

  // Pegar lista de dentistas da clinica para select
  this.dentistaService.getDentistas()
    .subscribe((res: any) => {
      this.dentistas = res
    })
    
}

agendar(): void {
if(!this.validador) {
  this.paciente.diaConsulta = this.paciente.diaConsulta.toString() //Converter Date para String
  this.dentistaService.agendarHorario(this.id, this.paciente)
    .subscribe((res) => res)

    this.router.navigate(["/dentistas/listagem"])
    this.dentistaService.openSnackbar('Agendado com sucesso!', true)
} else {
  this.paciente.diaConsulta = this.paciente.diaConsulta.toString()
  this.dentistaService.updateAgendamento(this.id, this.paciente)
    .subscribe((res) => res)
    
    this.router.navigate(["/dentistas/listagem"])
    this.dentistaService.openSnackbar('Agendado com sucesso!', true)
}
}
 

back(): void {
  this.router.navigate(["/dentistas/listagem"])
}

}
