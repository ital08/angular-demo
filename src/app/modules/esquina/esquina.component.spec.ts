import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquinaComponent } from './esquina.component';

describe('EsquinaComponent', () => {
  let component: EsquinaComponent;
  let fixture: ComponentFixture<EsquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsquinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EsquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
