import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from '../utility/utility.gridcomponent';


@NgModule({
    declarations: [
        GridComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [GridComponent],
    exports:[
        GridComponent,CommonModule
    ]
})
export class GridUtiliyModule { }
