import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DentistaService } from 'src/app/dentista.service';

@Component({
  selector: 'app-detalhes-dentista',
  templateUrl: './detalhes-dentista.component.html',
  styleUrls: ['./detalhes-dentista.component.css']
})
export class DetalhesDentistaComponent implements OnInit {

  id!: number
  paciente!: any
  dentistaNome!: string
  idDentista!: number
  constructor(private dentistaService: DentistaService,
              private route: ActivatedRoute, 
              private router: Router) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params.id
    })
    this.chamadaDeDados()
  }

  chamadaDeDados(): void {
     this.dentistaService.getDetalhes(this.id)
        .subscribe((res: any) => {
          this.paciente = res 
          this.idDentista = res.idDentista
          this.nomeDentista()
    })      
  }
 
  nomeDentista(): void {
    if(this.idDentista) {
    this.dentistaService.getDentistaByID(this.idDentista)
    .subscribe((res: any) => { 
      this.dentistaNome = res.nome
    })
  }
  }
  back(): void {
    this.router.navigate(["/dentistas/listagem"])
  }

}
