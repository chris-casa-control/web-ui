import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeStepsComponent } from './recipe-steps.component';

describe('RecipeStepsComponent', () => {
  let component: RecipeStepsComponent;
  let fixture: ComponentFixture<RecipeStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RecipeStepsComponent],
    });

    fixture = TestBed.createComponent(RecipeStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
