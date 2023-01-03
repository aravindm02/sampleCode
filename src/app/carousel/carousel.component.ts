import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  event_list = [
    {
      event:' Event 1',
      eventLocation:'Bangalore',
      eventDescription:'In bangalore, first event is going to happen. Please be careful about it',
      img: 'assets/pyt-slider21-1348x360-1348x360.jpg',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    },
     {
      event:' Event 2',
      eventLocation:'Dubai',
      eventDescription:'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
      img: 'assets/london-thames-city-hall-1920x120011-1348x360.jpg',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
     {
      event:' Event 3',
      eventLocation:'New York',
      eventDescription:'NewYork sits on top of event hosting',
      img: 'assets/bruges-belgium-1920x12001-1348x360.jpg',
      eventStartDate: new Date('2020/05/20'),
      eventEndingDate: new Date('2020/05/24')
    },
     {
      event:' Event 4',
      eventLocation:'Singapore',
      eventDescription:'Singapore is another great hosting city',
      img: 'assets/Bagnols5-1348x360.jpg',
      eventStartDate: new Date('2018/05/20'),
      eventEndingDate: new Date('2018/05/24')
    },
    {
      event:' Event 5',
      eventLocation:'Berlin',
      eventDescription: 'Berlin is best place to hang on',
      img: 'assets/cologne-germany-hd-1920x12001-1348x360.jpg',
      eventStartDate: new Date('2017/07/10'),
      eventEndingDate: new Date('2017/08/14')
    },
  ]

  upcoming_events =  this.event_list.filter( event => event.eventStartDate > new Date());
  constructor() { }

  ngOnInit(): void {
  }

}
