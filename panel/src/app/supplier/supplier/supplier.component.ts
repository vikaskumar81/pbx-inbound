import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../supplier.service';
import { trigger, transition, query, style, animate, stagger, keyframes, state } from '@angular/animations';
import { FormdetailComponent } from '../../shared/formdetail/formdetail.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class SupplierComponent implements OnInit {
  state:boolean;
  
  constructor(public data: SupplierService) { }

  ngOnInit() { }

  onClose(status)
  {
    console.log("Current Status : "+status);
    this.state=status;
  }

  ngOnDestory(){ }
}

