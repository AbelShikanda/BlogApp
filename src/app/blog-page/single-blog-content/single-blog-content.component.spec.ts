import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBlogContentComponent } from './single-blog-content.component';

describe('SingleBlogContentComponent', () => {
  let component: SingleBlogContentComponent;
  let fixture: ComponentFixture<SingleBlogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleBlogContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleBlogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
