import { Component, OnInit } from '@angular/core';
import { NutriService } from 'src/app/nutri.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-nutri',
  templateUrl: './detalhes-nutri.component.html',
  styleUrls: ['./detalhes-nutri.component.css']
})
export class DetalhesNutriComponent implements OnInit {
  id!: number
  paciente!: any
  nutriNome!: string
  idNutri!: number
  constructor(private nutriService: NutriService,
              private route: ActivatedRoute, 
              private router: Router) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params.id
    })
    this.chamadaDeDados()
  }

  chamadaDeDados(): void {
     this.nutriService.getDetalhes(this.id)
        .subscribe((res: any) => {
          this.paciente = res 
          this.idNutri = res.idNutri
          this.nomeNutricionista()
    })      
  }
 
  nomeNutricionista(): void {
    if(this.idNutri) {
    this.nutriService.getNutricionistaByID(this.idNutri)
    .subscribe((res: any) => { 
      this.nutriNome = res.nome
    })
  }
  }
  back(): void {
    this.router.navigate(["/nutricionistas/listagem"])
  }
}
