import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { ChatAffichageComponent } from '../chat-affichage/chat-affichage.component';
import { ChatFormulaireComponent } from '../chat-formulaire/chat-formulaire.component';
import { ChatElementComponent } from '../chat-affichage/chat-element/chat-element.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('ChatComponent', () => {
	let component: ChatComponent;
	let fixture: ComponentFixture<ChatComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule, HttpClientModule],
			declarations: [ChatComponent, ChatAffichageComponent, ChatFormulaireComponent, ChatElementComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChatComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
