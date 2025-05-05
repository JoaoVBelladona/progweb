import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { TarefaService } from '../../services/tarefa.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarefa',
  imports: [MatInputModule, MatFormFieldModule, 
  MatRadioModule, FormsModule,],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.scss'
})
export class TarefaComponent {

  titulo:string = '';
  descricao:string = '';
  concluido:boolean = false;

  constructor(private tarefaService:TarefaService){
  }

  gravar(){
    this.tarefaService.addTarefa({
      titulo:this.titulo, 
      descricao:this.descricao, 
      concluida:this.concluido,
    });
    Swal.fire({
      icon: 'success',
      title: 'sucesso',
      text: 'Tarefa salva com sucesso!',
    })
  }

}
