import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEnLigneComponent } from './site-en-ligne.component';

describe('SiteEnLigneComponent', () => {
  let component: SiteEnLigneComponent;
  let fixture: ComponentFixture<SiteEnLigneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteEnLigneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteEnLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
