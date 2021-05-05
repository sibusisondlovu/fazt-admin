import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  drivers!: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.drivers = this.db.collection('drivers').valueChanges();
  }

}
