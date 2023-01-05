import { Component, OnInit } from '@angular/core';
import { SubServicesService } from './sub-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SubjectPractice';

  constructor(private SubjectService: SubServicesService) {}

  ngOnInit(): void {
    this.SubjectService.subjectCall().subscribe((res) => {
      this.SubjectService._subjectUseCase$.next(res);
    });
  }
}
