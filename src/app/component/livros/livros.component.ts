import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LivrosServiceService } from '../../service/livros-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-livros',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss',
})
export class LivrosComponent implements OnInit{
livroForm!: FormGroup;

private fb = inject(FormBuilder);
private livroService = inject(LivrosServiceService);

ngOnInit(): void {
  this.livroForm = this.fb.group({
    nome: [''],
    autor: [''],
    lugar: ['']
  })
}

addBook() {
  this.livroService.addBook(this.livroForm.value)
}

}
