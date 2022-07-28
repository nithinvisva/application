import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_utils/services/commonService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title:string ='';

  constructor(private commonService: CommonService) {
   }

  ngOnInit(): void {
  }
  removeAuth(){
    this.commonService.removeAuth();
  }

}
