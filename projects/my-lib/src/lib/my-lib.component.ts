import { Component, OnInit } from '@angular/core';
import { MyLibService } from './my-lib.service';


@Component({
  selector: 'lib-my-lib',
  templateUrl: './my-lib.component.html',
  styleUrls: ['./my-lib.component.less']
})
export class MyLibComponent implements OnInit {

  isCollapsed = false;
  menulist: Array<{ title: string, link: string, icon?: string, active?: boolean }> = [];

  constructor(private myservice: MyLibService) {

    // 订阅公共服务数据
    this.myservice.MenuUpdate.subscribe(value => this.menulist = value);
    this.myservice.MenuFalgUpdate.subscribe(value => this.isCollapsed = value);
  }

  ngOnInit() {
  }

}
