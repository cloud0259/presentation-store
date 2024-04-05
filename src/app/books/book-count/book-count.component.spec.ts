import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCountComponent } from './book-count.component';

describe('BookCountComponent', () => {
  let component: BookCountComponent;
  let fixture: ComponentFixture<BookCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
