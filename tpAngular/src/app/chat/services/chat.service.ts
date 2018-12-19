import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ChatService {

	public messages: Message[];

	constructor(private http: HttpClient) {
		this.messages = new Array();
	}

	public buildMessages(resultats: any[]): Message[] {
		const messages = [];
		if (resultats != null) {
			for (const result of resultats) {
				const message = new Message(result);
				messages.push(message);
			}
		}
		return messages;
	}

	public getMessages(): Observable<Message[]> {
		return new Observable<Message[]>((observer) => {
			this.http.get<any[]>('http://localhost:3000/messages')
				.subscribe(
					(messages) => {
						this.messages = this.buildMessages(messages);
						observer.next(this.messages);
					},
					(error) => observer.error(error),
					() => observer.complete()
				);
		});
	}

	public addMessage(message: Message): Observable<Array<Message>> {
		this.messages.push(message);
		return of(this.messages); // angular 6
		// sinon : return Observable.of()
	}
}
