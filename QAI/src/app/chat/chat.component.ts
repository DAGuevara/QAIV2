import { Component } from '@angular/core';
import { ChatBotService } from '../services/chat-bot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  message!: string; 

  constructor(private chatgptSvc:ChatBotService,private router: Router){}

  SendMessage(){
    this.chatgptSvc.getDataFromOpenAI(this.message);
    this.message = '';


  }

DeleteMessage(){

  location.reload();
}

About(){
  this.router.navigate(['about']);
  
}

}
