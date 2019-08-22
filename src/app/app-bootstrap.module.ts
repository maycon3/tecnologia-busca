import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
    imports:[
        CommonModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot()        
    ],

    exports: [
        BsDropdownModule,
        TooltipModule
    ]
})
export class AppBootstrapModule{}