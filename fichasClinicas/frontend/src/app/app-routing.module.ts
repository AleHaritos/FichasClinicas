import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { DentistasComponent } from './content/dentistas/dentistas.component';
import { NutricionistasComponent } from './content/nutricionistas/nutricionistas.component';
import { PsicologasComponent } from './content/psicologas/psicologas.component';

import { CadastroNutriComponent } from './content/nutricionistas/cadastro-nutri/cadastro-nutri.component';
import { ListagemNutriComponent } from './content/nutricionistas/listagem-nutri/listagem-nutri.component';
import { ReativarNutriComponent } from './content/nutricionistas/reativar-nutri/reativar-nutri.component';
import { DeleteNutriComponent } from './content/nutricionistas/listagem-nutri/delete-nutri/delete-nutri.component';
import { DetalhesNutriComponent } from './content/nutricionistas/listagem-nutri/detalhes-nutri/detalhes-nutri.component';
import { AgendarNutriComponent } from './content/nutricionistas/listagem-nutri/agendar-nutri/agendar-nutri.component';
import { ReativarComponent } from './content/nutricionistas/reativar-nutri/reativar/reativar.component';

import { CadastroDentistaComponent } from './content/dentistas/cadastro-dentista/cadastro-dentista.component';
import { ReativarDentistaComponent } from './content/dentistas/reativar-dentista/reativar-dentista.component';
import { ListagemDentistaComponent } from './content/dentistas/listagem-dentista/listagem-dentista.component';
import { AgendarDentistaComponent } from './content/dentistas/listagem-dentista/agendar-dentista/agendar-dentista.component';
import { DeleteDentistaComponent } from './content/dentistas/listagem-dentista/delete-dentista/delete-dentista.component';
import { DetalhesDentistaComponent } from './content/dentistas/listagem-dentista/detalhes-dentista/detalhes-dentista.component';
import { ReativarDComponent } from './content/dentistas/reativar-dentista/reativar-d/reativar-d.component';

import { CadastroPsiComponent } from './content/psicologas/cadastro-psi/cadastro-psi.component';
import { ListagemPsiComponent } from './content/psicologas/listagem-psi/listagem-psi.component';
import { ReativarPsiComponent } from './content/psicologas/reativar-psi/reativar-psi.component';
import { ReativarPComponent } from './content/psicologas/reativar-psi/reativar-p/reativar-p.component';
import { AgendarPsiComponent } from './content/psicologas/listagem-psi/agendar-psi/agendar-psi.component';
import { DetalhesPsiComponent } from './content/psicologas/listagem-psi/detalhes-psi/detalhes-psi.component';
import { DeletePsiComponent } from './content/psicologas/listagem-psi/delete-psi/delete-psi.component';

const routes: Routes = [
{ path: '', component: HomeComponent},

{ path: 'dentistas', component: DentistasComponent,
children: [
  { path: '', component: CadastroDentistaComponent },
  { path: 'cadastro', component: CadastroDentistaComponent },
  { path: 'listagem', component: ListagemDentistaComponent },
  { path: 'reativar', component: ReativarDentistaComponent },
  { path: 'agendar/:id', component: AgendarDentistaComponent},
  { path: 'detalhes/:id', component: DetalhesDentistaComponent },
  { path: 'delete/:id', component: DeleteDentistaComponent },
  { path: 'reativar/:id', component: ReativarDComponent}
] },


{ path: 'nutricionistas', component: NutricionistasComponent,
children: [
  { path: '', component: CadastroNutriComponent }, 
  { path: 'cadastro', component: CadastroNutriComponent },
  { path: 'listagem', component: ListagemNutriComponent },
  { path: 'reativar', component: ReativarNutriComponent },
  { path: 'agendar/:id', component: AgendarNutriComponent },
  { path: 'delete/:id', component: DeleteNutriComponent },
  { path: 'detalhes/:id', component: DetalhesNutriComponent },
  { path: 'reativar/:id', component: ReativarComponent }
] },


{ path: 'psicologas', component: PsicologasComponent,
children: [
  { path: '', component: CadastroPsiComponent },
  { path: 'cadastro', component: CadastroPsiComponent },
  { path: 'listagem', component: ListagemPsiComponent },
  { path: 'reativar', component: ReativarPsiComponent },
  { path: 'agendar/:id', component: AgendarPsiComponent },
  { path: 'delete/:id', component: DeletePsiComponent },
  { path: 'detalhes/:id', component: DetalhesPsiComponent },
  { path: 'reativar/:id', component: ReativarPComponent }
] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
