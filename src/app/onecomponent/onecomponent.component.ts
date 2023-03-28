import { Component, OnInit } from '@angular/core';
import { SubServicesService } from '../sub-services.service';

@Component({
  selector: 'app-onecomponent',
  templateUrl: './onecomponent.component.html',
  styleUrls: ['./onecomponent.component.scss'],
})
export class OnecomponentComponent implements OnInit {
  constructor(private subjectService: SubServicesService) {}

  ngOnInit(): void {
    this.subjectService._firstSubject$.subscribe((res) => {
      console.log('First Subject ', res);
    });
  }
}
