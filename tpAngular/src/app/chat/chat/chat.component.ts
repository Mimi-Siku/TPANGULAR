import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

	public messages: Observable<Array<Message>>;

	// constructor(private http: HttpClient) {
	// }


	// ngOnInit() {
	// 	this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(
	// 		(results) => {
	// 			if (results != null) {
	// 				for (const result of results) {
	// 					result.date = new Date();
	// 					const message = new Message(result);
	// 					this.messages.push(message);
	// 				}
	// 				console.log(this.messages);
	// 			}
	// 		});
	// 	// Nous pouvons aussi pousser directement
	// 	// une tableau dans un autre:
	// 	const arr = new Array<Message>();
	// 	arr.push(...this.messages);
	// 	this.messages = arr;
	// }

	// public gererNouveauMessage(message: Message): void {
	// 	console.log('Nouveau message recu !');
	// 	this.messages.push(message);
	// 	const arr = new Array<Message>();
	// 	arr.push(...this.messages);
	// 	this.messages = arr;
	// }

	constructor(private chatService: ChatService) { }

	public ngOnInit(): void {
		this.messages = this.chatService.getMessages();
	}

	public gererNouveauMessage(message: Message): void {
		this.messages = this.chatService.addMessage(message);
	}
}
