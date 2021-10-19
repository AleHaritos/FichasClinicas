import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PsicologaService } from 'src/app/psicologa.service';

@Component({
  selector: 'app-detalhes-psi',
  templateUrl: './detalhes-psi.component.html',
  styleUrls: ['./detalhes-psi.component.css']
})
export class DetalhesPsiComponent implements OnInit {

  id!: number
  paciente!: any
  psicologaNome!: string
  idPsicologa!: number
  constructor(private psicoService: PsicologaService,
              private route: ActivatedRoute, 
              private router: Router) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params.id
    })
    this.chamadaDeDados()
  }

  chamadaDeDados(): void {
     this.psicoService.getDetalhes(this.id)
        .subscribe((res: any) => {
          this.paciente = res 
          this.idPsicologa = res.idPsicologa
          this.nomePsicologa()
    })      
  }
 
  nomePsicologa(): void {
    if(this.idPsicologa) {
    this.psicoService.getPsicologaByID(this.idPsicologa)
    .subscribe((res: any) => { 
      this.psicologaNome = res.nome
    })
  }
  }
  back(): void {
    this.router.navigate(["/psicologas/listagem"])
  }

}
