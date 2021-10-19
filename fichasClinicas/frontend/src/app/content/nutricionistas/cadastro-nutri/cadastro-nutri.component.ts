import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/pacientes.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro-nutri',
  templateUrl: './cadastro-nutri.component.html',
  styleUrls: ['./cadastro-nutri.component.css']
})
export class CadastroNutriComponent implements OnInit {
  
  myGroup = new FormGroup({
    
  email: new FormControl('', [
    Validators.required,
    Validators.email,
  ]),

  nome: new FormControl('', [
    Validators.required,
    Validators.maxLength(150),
    Validators.minLength(3),  
  ]),

  cpf: new FormControl('', [
    Validators.required,
    Validators.minLength(11),
    Validators.maxLength(11)
  ]),

  numero: new FormControl('', [
    Validators.required,
    Validators.minLength(9),
    Validators.maxLength(11)
  ]),
})


  constructor(private pacienteService: PacientesService) { }

  ngOnInit(): void {
  }

  confimarInsert(): void {

    if(this.myGroup.value.nome !== '' && this.myGroup.value.cpf !== '' && this.myGroup.value.email !== ''
      && this.myGroup.value.numero !== ''){

        this.pacienteService.salvarPaciente(this.myGroup.value)
        .subscribe((res: any) => {
          this.pacienteService.openSnackbar('Cadastro concluído com sucesso', true)
        })
  
     this.myGroup.reset()
    }

    }
  
}
