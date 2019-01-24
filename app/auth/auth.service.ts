import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }
  token: string;
  
  singin(email: string, password: string) {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
          response => {
              this.route.navigate(['/dashbord']);
              firebase.auth().currentUser.getIdToken()
              .then(
                  (token: string) => {
                      this.token = token;
                  }
              )
          }
      )
      .catch(
          error => {
              console.log(error);
          }
      )
  }
  isAuthenticated() {
      return this.token != null;
  }
  logOut() {
      firebase.auth().signOut();
      this.token = null;
  }
}
