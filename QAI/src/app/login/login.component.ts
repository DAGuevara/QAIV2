import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  usuario:string="";
  pass:string="";


constructor(private fb: FormBuilder,private router: Router){

 

}

login(){

  console.log(this.pass)
  console.log(this.usuario)
  
  if(this.usuario == "j" && this.pass == "12"){
    console.log("entrando al metodo vvvv")
    this.router.navigate(['dashboard']);
  }
 
}

registro(){

  this.router.navigate(['register']);
}


}
