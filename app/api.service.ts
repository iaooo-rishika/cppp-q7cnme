import { Injectable } from '@angular/core';
import { BidBasicDetailsComponent } from './bid-basic-details/bid-basic-details.component';
import { BidScheduleComponent } from './bid-schedule/bid-schedule.component';


import { Activity } from './activity';

@Injectable()
export class ApiService {



  constructor() { }


  getWorkable(){
    // wokable - bid
    return {
      ministry: 'Ministry of Highways',
      department: 'NHAI',
      buyer_name: 'Director - NCR',
      bid_classifications: ['EPC', 'ICT'],
      bid_types: ['Single', 'Limited'],
      project_title: "ICT Consultant for Smart City",
    }

  }

  getActivities() {
    return [
      new Activity(BidBasicDetailsComponent, {name: 'Bid Basic Details',workable: this.getWorkable()}),
      new Activity(BidScheduleComponent, {name: 'Bid Schedule', workable: this.getWorkable()}),

      // new Activity(BidBasicDetailsComponent, {name: 'Bid Schedule'}),
      // new Activity(BidBasicDetailsComponent, {name: 'Pre Qualifications Criterion'}),
      // new Activity(BidBasicDetailsComponent, {name: 'Specifications'})
    ];
  }
  
}