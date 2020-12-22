import { Component,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmationDialog } from './confirmation-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  displayedColumns = ['position','name','dob','gender','address','address1','address2','state','city','pincode','educational'];
  dataSource = [
    {position: 1, name: 'fd', dob: '20/20/2120', gender: 'M',address:'dfdf',address1:'fg',address2:'fg',state:'sdg',city:'sdg',pincode:'xcv',educational:'sef'},
    {position: 2, name: 'dfg', dob: '20/20/2120', gender: 'M',address:'bcv',address1:'fg',address2:'fg',state:'sdg',city:'sgs',pincode:'xds',educational:'sdf'},
    {position: 3, name: 'zxc', dob:  '20/20/2120', gender: 'M',address:'ljkl',address1:'gfg',address2:'fg',state:'sdg',city:'sdg',pincode:'sef',educational:'cbb'},
    {position: 4, name: 'io', dob:  '20/20/2120', gender: 'M',address:'tre',address1:'fg',address2:'fg',state:'sdg',city:'sdg',pincode:'esf',educational:'kwe'},
  ];
  constructor(public dialog: MatDialog){

  }
  openDialog(row){
const dialogRef = this.dialog.open(ConfirmationDialog, {
  data: Object.keys(row)
});

dialogRef.afterClosed().subscribe(result => {
  Object.keys(row).map((e,i)=>{
    if(e!=result[i]){
      delete row[result[i]];
    }
  })
});
}
}


