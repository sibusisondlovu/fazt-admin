import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents!: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.documents = this.db.collection('documents').valueChanges();
  }

}
