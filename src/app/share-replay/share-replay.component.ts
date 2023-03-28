import { Component, OnInit } from '@angular/core';
import { SubServicesService } from '../sub-services.service';
import { of, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss'],
})
export class ShareReplayComponent implements OnInit {
  constructor(private subServies: SubServicesService) {}

  ngOnInit(): void {
    const observable = of('hello', 'world', [2, 5, 8, 5, 6]).pipe(
      shareReplay() // share the last emitted value with new subscribers
    );

    observable.subscribe((val: any) => console.log(`Subscriber 1: ${val}`));
  }
  firstBtn() {
    this.subServies.getTodosList().subscribe((res) => {
      console.log('First Btn', res);
    });
  }

  secondBtn() {
    this.subServies.getTodosList().subscribe((res) => {
      console.log('Second Btn', res);
    });
  }
}
