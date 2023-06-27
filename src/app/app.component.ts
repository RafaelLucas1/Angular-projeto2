
import { Component } from '@angular/core';




import { AngularFireDatabase } from '@angular/fire/compat/database';




@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

  title = 'crud-angular-firebase';



  constructor(public db: AngularFireDatabase) {



  }



  test() {

    this.db.list("teste").push("test")

    .then( result =>

      console.log("AAAAAAAAAAAAAAAAAAAAA")

    );

  }

}

