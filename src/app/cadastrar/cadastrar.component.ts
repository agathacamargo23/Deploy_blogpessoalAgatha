import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/Usuario.Login';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  usuario: Usuario = new Usuario// cria um objeto onde traz e referencia a model usuario
  confirmarSenha: string
  usuarioLogin: UsuarioLogin = new UsuarioLogin
  tipoUsuario: string

  constructor( private authService: AuthService,
    private router: Router) { }

  ngOnInit() {// inicia a pagina focados nesses metodos aqui
 window.scroll(0,0)

  }
confirmeSenha(event:any){// cria  evento para onde recebe as senhas
  this.confirmarSenha = event.target.value//e chamado para confirmar a senha

}

tipoUser(event:any){
this.tipoUsuario = event.target.value

}

cadastrarUsuario(){
  this.usuario.tipo = this.tipoUsuario

  if(this.usuario.senha != this.confirmarSenha ){
      alert("Suas senhas precisam ser iguais!")
  }
  else{//sobrescreve a senha em formato json para que o backend receber
    this.authService.Cadastrar(this.usuario).subscribe((resp: Usuario) => { 
      this.usuario = resp
      this.router.navigate(['/entrar'])
      alert("Você foi cadastrado com sucesso!")
    }) ; 
   
  }
 }
}
