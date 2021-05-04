import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  // tslint:disable-next-line:typedef
  fetchAllRiders() {
    return this.firestore.collection('riders').valueChanges();
  }
}
