import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',   //caminho do seletor
  templateUrl: './app.component.html',   //template
  styleUrls: ['./app.component.css']   //estilo Css
})
export class AppComponent {
  title = 'BlogPessoalAngular';

  constructor(
    public authService: AuthService
  ){}
}
