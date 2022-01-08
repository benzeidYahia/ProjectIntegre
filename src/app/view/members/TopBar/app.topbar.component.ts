import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { AppMainComponent } from '../../../app.main.component';
import {MenuItem} from 'primeng/api';
import {style} from '@angular/animations';
import {LoginService} from '../../../controller/service/login.service';
import {Member} from '../../../controller/model/member';
import {MemberServiceService} from '../../../controller/service/member-service.service';
import {JuryDVE} from '../../../controller/model/jury-dve';
import {JuryServiceService} from '../../../controller/service/jury-service.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
    items: MenuItem[];
    // tslint:disable-next-line:max-line-length
    constructor(public app: AppComponent, public appMain: AppMainComponent, private serviceUser: LoginService, private service: MemberServiceService, private  servicee: JuryServiceService) {}

get member(): Member {
    return this.service.member;
}

set member(value: Member) {
    this.service.member = value;
}
    get jury(): JuryDVE {
        return this.servicee.jury;
    }

    set jury(value: JuryDVE) {
        this.servicee.jury = value;
    }
}
