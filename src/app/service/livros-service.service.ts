import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, getDocs, getFirestore } from '@angular/fire/firestore';
import { Livro } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosServiceService {


constructor() {}
private firestore = inject(Firestore);

livrosCollection = collection(this.firestore, 'Livros');

async addBook(livro: Livro){
  const ref = collection(this.firestore, 'Livros')
  return addDoc(ref, livro);
}

  getAllBooks(): Observable<Livro[]> {
   return collectionData(this.livrosCollection, {idField: 'id'}) as Observable<Livro[]>
  }
}
