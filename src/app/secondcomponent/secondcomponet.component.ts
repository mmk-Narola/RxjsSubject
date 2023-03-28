import { Component, OnInit } from '@angular/core';
import { SubServicesService } from '../sub-services.service';

@Component({
  selector: 'app-secondcomponet',
  templateUrl: './secondcomponet.component.html',
  styleUrls: ['./secondcomponet.component.scss'],
})
export class SecondcomponentComponent implements OnInit {
  constructor(private subjectService: SubServicesService) {}

  ngOnInit(): void {
    this.subjectService._secondSubject$.subscribe((res) => {
      console.log('Two Subject', res);
    });

    this.subjectService.getSubjectData().subscribe((res) => {
      console.log('Third Subject', res);
    });
  }
}
