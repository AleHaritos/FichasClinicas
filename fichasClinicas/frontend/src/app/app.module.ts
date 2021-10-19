import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import LocalePT from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

import { HeaderComponent } from './template/header/header.component';
import { NavComponent } from './template/nav/nav.component';
import { FooterComponent } from './template/footer/footer.component'
import { HomeComponent } from './content/home/home.component';
import { DentistasComponent } from './content/dentistas/dentistas.component';
import { NutricionistasComponent } from './content/nutricionistas/nutricionistas.component';
import { PsicologasComponent } from './content/psicologas/psicologas.component'


import { NutriService } from './nutri.service';
import { PacientesService } from './pacientes.service';
import { PsicologaService } from './psicologa.service';
import { DentistaService } from './dentista.service';

import { CadastroNutriComponent } from './content/nutricionistas/cadastro-nutri/cadastro-nutri.component';
import { ListagemNutriComponent } from './content/nutricionistas/listagem-nutri/listagem-nutri.component';
import { ReativarNutriComponent } from './content/nutricionistas/reativar-nutri/reativar-nutri.component';
import { CadastroDentistaComponent } from './content/dentistas/cadastro-dentista/cadastro-dentista.component';
import { ListagemDentistaComponent } from './content/dentistas/listagem-dentista/listagem-dentista.component';
import { ReativarDentistaComponent } from './content/dentistas/reativar-dentista/reativar-dentista.component';
import { AgendarDentistaComponent } from './content/dentistas/listagem-dentista/agendar-dentista/agendar-dentista.component';
import { DeleteDentistaComponent } from './content/dentistas/listagem-dentista/delete-dentista/delete-dentista.component';
import { DetalhesDentistaComponent } from './content/dentistas/listagem-dentista/detalhes-dentista/detalhes-dentista.component';
import { ReativarDComponent } from './content/dentistas/reativar-dentista/reativar-d/reativar-d.component';


import { CadastroPsiComponent } from './content/psicologas/cadastro-psi/cadastro-psi.component';
import { ListagemPsiComponent } from './content/psicologas/listagem-psi/listagem-psi.component';
import { ReativarPsiComponent } from './content/psicologas/reativar-psi/reativar-psi.component';
import { AgendarPsiComponent } from './content/psicologas/listagem-psi/agendar-psi/agendar-psi.component';
import { DeletePsiComponent } from './content/psicologas/listagem-psi/delete-psi/delete-psi.component';
import { DetalhesPsiComponent } from './content/psicologas/listagem-psi/detalhes-psi/detalhes-psi.component';
import { ReativarPComponent } from './content/psicologas/reativar-psi/reativar-p/reativar-p.component'

import { AgendarNutriComponent } from './content/nutricionistas/listagem-nutri/agendar-nutri/agendar-nutri.component';
import { DeleteNutriComponent } from './content/nutricionistas/listagem-nutri/delete-nutri/delete-nutri.component';
import { DetalhesNutriComponent } from './content/nutricionistas/listagem-nutri/detalhes-nutri/detalhes-nutri.component';
import { ReativarComponent } from './content/nutricionistas/reativar-nutri/reativar/reativar.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar'

//Registrar o formato de dados pt-BR
registerLocaleData(LocalePT, 'pt-BR')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    DentistasComponent,
    NutricionistasComponent,
    PsicologasComponent,
    CadastroNutriComponent,
    ListagemNutriComponent,
    ReativarNutriComponent,
    CadastroDentistaComponent,
    ListagemDentistaComponent,
    ReativarDentistaComponent,
    CadastroPsiComponent,
    ListagemPsiComponent,
    ReativarPsiComponent,
    AgendarNutriComponent,
    DeleteNutriComponent,
    DetalhesNutriComponent,
    ReativarComponent,
    AgendarDentistaComponent,
    DeleteDentistaComponent,
    DetalhesDentistaComponent,
    ReativarDComponent,
    AgendarPsiComponent,
    DeletePsiComponent,
    DetalhesPsiComponent,
    ReativarPComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatProgressBarModule
    
  ],
  providers: [NutriService, PacientesService, PsicologaService, DentistaService, 
          { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
