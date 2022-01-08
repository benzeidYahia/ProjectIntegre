import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {AppComponent} from '../../../app.component';
import {Member} from '../../../controller/model/member';
import {JuryDVE} from '../../../controller/model/jury-dve';
import {SuperAdminDVE} from '../../../controller/model/super-admin-dve';
import {LoginService} from '../../../controller/service/login.service';
import {MemberServiceService} from '../../../controller/service/member-service.service';
import {JuryServiceService} from '../../../controller/service/jury-service.service';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./tabledemo.scss']
})
export class DashboardDemoComponent implements OnInit {

    products: any[];

    items: MenuItem[];

    chartData: any;

    chartOptions: any;

    events: any[];

    fullcalendarOptions: any;

    home: any[];


    constructor( private service: LoginService, private menu: AppComponent,  private serviceM: MemberServiceService, private  servicee: JuryServiceService) {
    }

    get member(): Member {
        return this.service.member;
    }

    set member(value: Member) {
        this.service.member = value;
    }

    get jury(): JuryDVE {
        return this.service.jury;
    }

    set jury(value: JuryDVE) {
        this.service.jury = value;
    }

    get admin(): SuperAdminDVE {
        return this.service.admin;
    }

    set admin(value: SuperAdminDVE) {
        this.service.admin = value;
    }
    set model(value: any[]) {
        this.service.model = value;
    }
    get members(): Member {
        return this.serviceM.member;
    }

    set members(value: Member) {
        this.serviceM.member = value;
    }
    get jurys(): JuryDVE {
        return this.servicee.jury;
    }

    set jurys(value: JuryDVE) {
        this.servicee.jury = value;
    }
    ngOnInit() {
        this.admin = null;
        this.jury = null;
        this.member = null;
        this.model = null;
        this.members = null;
        this.jurys = null;
        this.menu.layoutMode = 'Overlay';
    }
}
