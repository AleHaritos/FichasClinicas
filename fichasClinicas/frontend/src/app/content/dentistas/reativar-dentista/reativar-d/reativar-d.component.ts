import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacientesService } from 'src/app/pacientes.service';
import { Paciente } from 'src/app/shared/paciente.model';

@Component({
  selector: 'app-reativar-d',
  templateUrl: './reativar-d.component.html',
  styleUrls: ['./reativar-d.component.css']
})
export class ReativarDComponent implements OnInit {

  paciente!: Paciente
  id!: number

  constructor(private pacienteService: PacientesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
      this.route.params.subscribe((params: any) => {
      this.id = params.id
    })

    this.pacienteService.getInativoById(this.id)
      .subscribe((res: any) => this.paciente = res)
  }


  reativar(): void {
    this.pacienteService.softDelete(this.id, {status: true})
      .subscribe((res: any) => res)

      this.router.navigate(['/dentistas/reativar'])
      this.pacienteService.openSnackbar(`Paciente ${this.paciente.nome} reativado`, true)
  }

}
