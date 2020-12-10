import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhothFetchService {
  constructor(private http: HttpClient) {}
  getPhoto() {
    return this.http.get<UsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID jhlLCrnqUFfVF-jFFdzVNRvL-zaDnjDOe3ZDPhHhi6w',
        },
      }
    );
  }
}
