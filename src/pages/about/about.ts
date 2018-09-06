import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http, Response} from '@angular/http'


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  public page=1;//页码
  public lists=[];//每次合并得到的数据
  public requsts=[];//每次请求到的数据

  
  constructor(public navCtrl: NavController, private http:Http) {
    this.upRequestData("");
  }
  //上拉加载函数 触底时加载
  doInfinite(infinite){
    this.upRequestData(infinite);
  }
  //下拉触顶函数 触顶时加载
  doRefresh(infinite){
    this.page=1;
    this.upRequestData(infinite);
  }
  //上拉触底和下来触底都需要调用该函数,通过判断page是否=1来决定lists数组的值
  upRequestData(infiniteScroll){
   let url='http://jsonplaceholder.typicode.com/photos?_page='+this.page;
  // let url ='/Country/getCountries?pLimit=25&pPage='+this.page;
   console.log(url);
   
   this.http.request(url)
   .subscribe((res:Response)=>{
     this.requsts = res.json();
     if(this.page==1){//如果page=1，可能是初次加载需要覆盖原有的
           this.lists= this.requsts;
         }
         else{ //如果page>1,说明数据触底，需要原有数据与请求到的lists数组数据合并后渲染
             this.lists= this.lists.concat(res.json());
            // console.log('fild')
         }
         console.log(this.lists);
    
         this.page++;
    
         if(infiniteScroll){
           infiniteScroll.complete();
           if(this.requsts.length==0){
             infiniteScroll.enable(false);
           }
         }
     console.log(this.requsts);
   })
  }

}