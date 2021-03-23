import { Component, OnInit } from '@angular/core';
import { SidebarServicesService } from './Services/sidebar-services.service';
import { SideElements } from './SideElements';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  providers: [SidebarServicesService],

})
export class SideBarComponent implements OnInit {

  constructor(private sidebarServicesService:SidebarServicesService) { }

  items: SideElements[] = [];


  ngOnInit(): void {

    this.sidebarServicesService.getSideElements().subscribe(mydata => {
      this.items=mydata;
    });
  }



  
}
