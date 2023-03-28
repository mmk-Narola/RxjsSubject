import { Component, OnInit, VERSION } from '@angular/core';
import { SubServicesService } from './sub-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Rxjs Operator Practices';

  constructor(private SubjectService: SubServicesService) {}

  ngOnInit(): void {
    this.SubjectService.subjectCall().subscribe((res) => {
      console.log('Api Call ', res);
    });
  }
}
