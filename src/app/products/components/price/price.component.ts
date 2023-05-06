import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price-component',
  templateUrl: './price.component.html',
  styles: [],
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('Componente hijo - ngOnInit');
    this.interval$ = interval(1000).subscribe((value) =>
      console.log('tick', value)
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('Componente hijo - ngOnChanges');
  }
  ngOnDestroy(): void {
    console.log('Componente hijo - ngOnDestroy');
    this.interval$?.unsubscribe();
  }
}
