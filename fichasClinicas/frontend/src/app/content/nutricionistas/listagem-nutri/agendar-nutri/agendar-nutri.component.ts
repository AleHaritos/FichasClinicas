import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { PacientesNutri } from 'src/app/shared/pacientesNutri.model';
import { Profissional } from 'src/app/shared/profissional.model';
import { NutriService } from 'src/app/nutri.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agendar-nutri',
  templateUrl: './agendar-nutri.component.html',
  styleUrls: ['./agendar-nutri.component.css']
})
export class AgendarNutriComponent implements OnInit {
  
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();

      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }

    return '';
  }
  
  //Dados
  paciente: PacientesNutri = {
    diaConsulta: '',
    hora: '',
    massaMagra: '',
    gorduraCorporal: '',
    pesoCorporal: '',
    idPaciente: undefined,
    idNutri: undefined
  }
  id!: number
  nutricionistas!: Profissional[]
  validador: any
  constructor(private nutriService: NutriService,
              private route: ActivatedRoute,
              private router: Router ) {  }

  ngOnInit(): void {
    //Pegar ID por parametro
    this.route.params.subscribe((params: any) => {
     this.id =  params.id
     this.paciente.idPaciente = params.id
    })

    this.nutriService.getPacienteNutriByID(this.id)
      .subscribe((res: any) => {
        this.validador = res
        
      })

    // Pegar lista de nutricionistas da clinica para select
    this.nutriService.getNutricionistas()
      .subscribe((res: any) => {
        this.nutricionistas = res
      })
      
  }

  agendar(): void {
  if(!this.validador) {
    this.paciente.diaConsulta = this.paciente.diaConsulta.toString() //Converter Date para String
    this.nutriService.agendarHorario(this.id, this.paciente)
      .subscribe((res) => res)

      this.router.navigate(["/nutricionistas/listagem"])
      this.nutriService.openSnackbar('Agendado com sucesso!', true)
  } else {
    this.paciente.diaConsulta = this.paciente.diaConsulta.toString()
    this.nutriService.updateAgendamento(this.id, this.paciente)
      .subscribe((res) => res)
      
      this.router.navigate(["/nutricionistas/listagem"])
      this.nutriService.openSnackbar('Agendado com sucesso!', true)
  }
  }
   

  back(): void {
    this.router.navigate(["/nutricionistas/listagem"])
  }
}
