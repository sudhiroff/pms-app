import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTrackersComponent } from './issue-trackers.component';

describe('IssueTrackersComponent', () => {
  let component: IssueTrackersComponent;
  let fixture: ComponentFixture<IssueTrackersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueTrackersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTrackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
