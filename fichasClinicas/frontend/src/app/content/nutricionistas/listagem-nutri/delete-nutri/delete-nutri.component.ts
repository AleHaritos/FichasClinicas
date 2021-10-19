import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/shared/paciente.model';
import { NutriService } from 'src/app/nutri.service';
import { PacientesService } from 'src/app/pacientes.service';
import { PsicologaService } from 'src/app/psicologa.service';
import { DentistaService } from 'src/app/dentista.service';

@Component({
  selector: 'app-delete-nutri',
  templateUrl: './delete-nutri.component.html',
  styleUrls: ['./delete-nutri.component.css']
})
export class DeleteNutriComponent implements OnInit {
  id!: number
  paciente!: Paciente

  constructor(private pacienteService: PacientesService,
              private route: ActivatedRoute,
              private router: Router,
              private nutriService: NutriService,
              private dentistaService:DentistaService,
              private psicoService: PsicologaService ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params.id
    })

    this.pacienteService.getPacienteByID(this.id)
        .subscribe((res: any) => this.paciente = res)
  }

  softDelete(): void {
    this.pacienteService.softDelete(this.id,{ status: false})
      .subscribe((res: any) => res)

      this.pacienteService.openSnackbar('Paciente deletado com sucesso!', true)
      this.router.navigate(['/nutricionistas/listagem'])
  }

  delete(): void {
    this.dentistaService.deletePacienteDentista(this.id)
      .subscribe((res: any) => {
        res   
     
    this.nutriService.deletePacienteNutri(this.id)
        .subscribe((res: any) => {
          res
      
    this.psicoService.deletePacientePsicologa(this.id)
          .subscribe((res: any) => {
            res
            this.pacienteService.deletePaciente(this.id)
            .subscribe((res: any) => res)
          })
        })
      }) 

    this.nutriService.openSnackbar('Paciente deletado com sucesso!', true)
    this.router.navigate(['/nutricionistas/listagem'])
  }

  back(): void {
    this.router.navigate(['/nutricionistas/listagem'])
  }
}
