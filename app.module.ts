import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GroupDefaultExampleComponent } from './src/group-default-example.component'

@Component({
    selector: 'app-component',
    template: '<group-default-example></group-default-example>'
})
export class AppComponent {}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgSelectModule,
        NgOptionHighlightModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        GroupDefaultExampleComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}



