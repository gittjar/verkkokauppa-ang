import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';



@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html'
})
export class ProductsHeaderComponent implements OnInit {
@Output() columnsCountChange = new EventEmitter<number>();
@Output() itemsCountChange = new EventEmitter<number>();
@Output() sortChange = new EventEmitter<string>();


// alasvetovalikko
panelOpenState = false;


sort = 'Jotakin';
itemShowCount = 12;
showMore = 'Jotakin lisää';
showMore2 = 'Something more >';

constructor() {}

ngOnInit(): void {
  
}



onSortUpdated(newSort: string): void{
  this.sort = newSort;
  this.sortChange.emit(newSort);
}

onItemsUpdated(count: number): void{
  this.itemShowCount = count;
  this.itemsCountChange.emit(count);
}



onColumnsUpdated(colsNum: number): void{
  this.columnsCountChange.emit(colsNum);

}


}
