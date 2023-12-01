import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public showdata: any[];
  public onedata: any[];
  smalltab = false;
  constructor(private data: UserdetailsService) { }
  ngOnInit(): void {
    this.data.showDetails().subscribe((data: any[]) => {
      this.showdata = data;

    })
    console.log(this.showdata)
  }

}
