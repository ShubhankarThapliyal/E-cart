import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../service';

@Component({
  selector: 'app-customer-bill',
  templateUrl: './customer-bill.component.html',
  styleUrls: ['./customer-bill.component.css']
})
export class CustomerBillComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

//   constructor(private api: ServiceService) {
    
//    }
// userObj:any;
// user:any;
// total:any;
// name:any;
//   ngOnInit() {
//     let a  = this.api.getUser();
//     this.user=a.name;
//    this.total=this.api.getTotal();
//   }


}
