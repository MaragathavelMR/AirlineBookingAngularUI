import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector:"grid-ui",
  templateUrl: './utility.grid.html'
})
export class GridComponent{
    //grid column names
    gridColumns:Array<any>=new Array<any>();

    //grid data
    gridData:Array<any>=new Array<any>();

    @Input("grid-columns")
    set setGridColumns(_gridColumns:Array<any>){
        this.gridColumns=_gridColumns;
    }

    @Input("grid-data")
    set setGridData(_gridData:Array<any>){
        this.gridData=_gridData;
    }
    
    @Output("grid-selected")
    eventemitter:EventEmitter<any>=new EventEmitter<any>();

    @Output("grid-item-delete")
    deleteeventemitter:EventEmitter<any>=new EventEmitter<any>();

    SelectGrid(_selected:any){
        this.eventemitter.emit(_selected);
    }

    DeleteGridItem(_selected:any){
        this.deleteeventemitter.emit(_selected);
    }

}
