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
    this.subjectService._subjectUseCase$.subscribe((res) => {
      // console.log('Two Componet Subject Services', res);
    });

    this.subjectService.newSubjectForTest$.subscribe((res) => {
      console.log('res :>> ', res);
    });
  }
}
