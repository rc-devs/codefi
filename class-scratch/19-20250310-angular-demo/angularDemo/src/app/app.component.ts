import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { InputComponent } from './input/input.component';
import { CounterComponent } from './counter/counter.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ToggleButtonComponent, InputComponent, CounterComponent, ParentComponent, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularDemo';
}
