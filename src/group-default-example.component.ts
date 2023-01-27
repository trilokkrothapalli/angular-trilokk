import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'group-default-example',
    templateUrl: './group-default-example.component.html',
    styleUrls: ['./group-default-example.component.scss']
})
export class GroupDefaultExampleComponent implements OnInit {

  
    accounts = [
        {
            viewId: 0,
            viewGuid: "00000000-0000-0000-0000-000000000000",
            viewName: "No saved views",
            viewType: "Financial",
            viewGroup: "YOUR VIEWS",
            disabled: true
        },
        {
            viewId: -1,
            viewGuid: "00000000-0000-0000-0000-000000000000",
            viewName: "Financial View",
            viewType: "Financial",
            viewGroup: "QUICK VIEWS",
            disabled: false
        }
    ];
    selectedAccount = this.accounts.some(x => x.viewId ==0);
    constructor() {
    }

    ngOnInit() {
    }

}
