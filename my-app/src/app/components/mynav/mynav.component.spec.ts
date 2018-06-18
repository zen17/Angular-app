
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MynavComponent } from './mynav.component';

describe('MynavComponent', () => {
  let component: MynavComponent;
  let fixture: ComponentFixture<MynavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
