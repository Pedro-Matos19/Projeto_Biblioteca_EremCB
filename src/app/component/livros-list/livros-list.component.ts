import { Component, inject, OnInit } from '@angular/core';
import { LivrosServiceService } from '../../service/livros-service.service';
import { Livro } from '../../types';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livros-list',
  imports: [CommonModule],
  templateUrl: './livros-list.component.html',
  styleUrl: './livros-list.component.scss'
})
export class LivrosListComponent implements OnInit{

  livroList$!: Observable<Livro[]>;

private livrosService = inject(LivrosServiceService);

ngOnInit(): void {
  this.livroList$ = this.livrosService.getAllBooks();
}

}
