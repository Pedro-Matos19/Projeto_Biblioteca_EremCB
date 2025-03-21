import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLivrosComponent } from './list-livros.component';

describe('ListLivrosComponent', () => {
  let component: ListLivrosComponent;
  let fixture: ComponentFixture<ListLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLivrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
