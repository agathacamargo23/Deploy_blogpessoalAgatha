import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/Usuario.Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private html: HttpClient) {}//libera os metodos http

/*
certificar os endpoints
*/

entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
return this.html.post<UsuarioLogin>('https://blogpessoalagatha.herokuapp.com/usuarios/logar', usuarioLogin)
}
Cadastrar(usuario: Usuario): Observable<Usuario> {// da referencia a model do usuario

return this.html.post<Usuario>('https://blogpessoalagatha.herokuapp.com/usuarios/cadastrar', usuario)  
  }// sinaliza a model usuario model e o usuario controller 

atualizar(usuario: Usuario): Observable<Usuario> {// da referencia a model do usuario

    return this.html.put<Usuario>('https://blogpessoalagatha.herokuapp.com/usuarios/update', usuario)  
  }
getByIdUsuario(id: number): Observable<Usuario>{
  return this.html.get<Usuario>(`https://blogpessoalagatha.herokuapp.com/usuarios/${id}`)
} 


  logado(){
    let ok : boolean = false

    if(environment.token != ''){
      ok = true
    
    }
    return ok
  }

}
