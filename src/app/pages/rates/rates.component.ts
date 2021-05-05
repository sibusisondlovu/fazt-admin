import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {

  rates!: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.rates = this.db.collection('rates').valueChanges();
  }

}
