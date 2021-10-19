import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PacientesService } from 'src/app/pacientes.service';

@Component({
  selector: 'app-cadastro-dentista',
  templateUrl: './cadastro-dentista.component.html',
  styleUrls: ['./cadastro-dentista.component.css']
})
export class CadastroDentistaComponent implements OnInit {

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
