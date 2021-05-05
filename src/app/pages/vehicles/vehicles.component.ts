import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles!: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.vehicles = this.db.collection('vehicles').valueChanges();
  }

}
