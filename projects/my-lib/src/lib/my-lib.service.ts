import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  public Menu: Array<{ title: string, link: string, icon?: string, active?: boolean }> = [];
  public MenuUpdate: Subject<any> = new Subject<any>();
  public MenuFalgUpdate: Subject<any> = new Subject<any>();

  constructor() { }

  /**
   * 设置订阅
   * @param val 参数
   */
  setData(val: any) {
    this.Menu = val;
    this.MenuUpdate.next(val);
  }

  /**
   * 获取值
   */
  getData() {
    return this.Menu;
  }

  /**
   * 数据重置
   */
  resetData() {
    this.Menu = [];
    this.MenuUpdate.next(this.Menu);
  }

  /**
   * 设置订阅
   * @param val 参数
   */
  setFalgData(val: any) {
    this.MenuFalgUpdate.next(val);
  }
}
