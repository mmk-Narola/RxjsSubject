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
    this.subjectService._subjectUseCase$.subscribe((res) => {
      console.log('One Component Subject Services', res);
    });

    this.subjectService.newSubjectForTest$.next([
      'Mahesh',
      'Mohan',
      'Kshirsagar',
    ]);

    //   this.subjectService.eventEmmit.subscribe((res) =>
    //     console.log('Event res :>> ', res)
    //   );
    // }
  }
}
