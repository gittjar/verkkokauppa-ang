import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Material } from 'src/app/models/material.models';
import { MaterialstoreService } from 'src/app/services/materialstore.service';
import { MatTableDataSource } from "@angular/material/table";


// const ELEMENT_DATA: Material[] = [  
// {id: 1001, name: 'jauheliha', organic: true, origincountry: 'FIN', category: 'lihat', information: 'juu', image: ''},
// {id: 1002, name: 'pekoni', organic: true, origincountry: 'FIN', category: 'lihat', information: 'juu', image: ''},
// ];


@Component({
  selector: 'app-material-box',
  templateUrl: './material-box.component.html',
  styleUrls: ['./material-box.component.css']
})
export class MaterialBoxComponent implements OnInit{

  // filteri taulukkoon
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @Input () fullWidthMode = false;
 // @Input () material: Material | undefined;

  material: Material[] = [];
  public displayedColumns: string[] = ['id', 'name', 'alkuperämaa', 'info', 'organic'];
  public dataSource = new MatTableDataSource<Material>();

    //dependency injection
    constructor(private materialstoreService: MaterialstoreService) {}
  ngOnInit(){
   this.getMaterialsInformation();
  }

  getMaterialsInformation(){
    this.materialstoreService.getAllMaterials()
      .subscribe((res)=>{
        console.log(res);
        this.dataSource.data = res;
      })


  //materials: Array<Material> | undefined;
  //dataSource = ELEMENT_DATA;
}
}