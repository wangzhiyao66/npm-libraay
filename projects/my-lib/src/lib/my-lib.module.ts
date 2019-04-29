import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, zh_CN, NZ_I18N } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:jsdoc-format
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  declarations: [MyLibComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    NgZorroAntdModule
  ],
  exports: [MyLibComponent],
  providers   : [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class MyLibModule { }
