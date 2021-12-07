import {Component} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';


@Component({
    templateUrl: './formlayoutdemo.component.html'
})
export class FormLayoutDemoComponent {

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                 ) { }
}
