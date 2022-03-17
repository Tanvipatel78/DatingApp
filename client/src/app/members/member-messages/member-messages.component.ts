import { NgForm } from '@angular/forms';
import { MessageService } from './../../_services/message.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
// import { Message } from 'src/app/_models/message';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm: NgForm;
  @Input() messages: Message[];
  @Input() username: string;
  messageContent: string;


  constructor(public messageService: MessageService) { }

  ngOnInit(): void {

  }
  sendMessage() {
    this.messageService.sendMessage(this.username, this.messageContent).subscribe(message => {
      this.messages.push(message);
      this.messageForm.reset();
    })
  }


}
