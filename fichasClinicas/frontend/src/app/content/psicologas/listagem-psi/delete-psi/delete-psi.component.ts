import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacientesService } from 'src/app/pacientes.service';
import { Paciente } from 'src/app/shared/paciente.model';
import { PsicologaService } from 'src/app/psicologa.service';
import { NutriService } from 'src/app/nutri.service';
import { DentistaService } from 'src/app/dentista.service';

@Component({
  selector: 'app-delete-psi',
  templateUrl: './delete-psi.component.html',
  styleUrls: ['./delete-psi.component.css']
})
export class DeletePsiComponent implements OnInit {

  id!: number
  paciente!: Paciente

  constructor(private pacienteService: PacientesService,
              private route: ActivatedRoute,
              private router: Router,
              private psicoService: PsicologaService,
              private dentistaService: DentistaService,
              private nutriService: NutriService) { }

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
      this.router.navigate(['/psicologas/listagem'])
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


    this.psicoService.openSnackbar('Paciente deletado com sucesso!', true)
    this.router.navigate(['/psicologas/listagem'])
  }

  back(): void {
    this.router.navigate(['/psicologas/listagem'])
  }

}
