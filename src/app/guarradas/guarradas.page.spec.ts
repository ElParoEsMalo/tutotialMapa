import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuarradasPage } from './guarradas.page';

describe('GuarradasPage', () => {
  let component: GuarradasPage;
  let fixture: ComponentFixture<GuarradasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuarradasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuarradasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
