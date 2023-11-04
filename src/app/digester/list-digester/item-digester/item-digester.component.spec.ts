import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDigesterComponent } from './item-digester.component';

describe('ItemDigesterComponent', () => {
  let component: ItemDigesterComponent;
  let fixture: ComponentFixture<ItemDigesterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDigesterComponent]
    });
    fixture = TestBed.createComponent(ItemDigesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
