import { Component, OnInit, Input } from '@angular/core';
import { PhothFetchService } from '../photh-fetch.service';

@Component({
  selector: 'app-photh-display',
  templateUrl: './photh-display.component.html',
  styleUrls: ['./photh-display.component.css'],
})
export class PhothDisplayComponent implements OnInit {
  photoUrl: string;
  constructor(private photoFetch: PhothFetchService) {
    this.fetchThePhoto();
  }

  onRequest() {
    this.fetchThePhoto();
  }

  fetchThePhoto() {
    this.photoFetch.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }
  ngOnInit(): void {}
}
