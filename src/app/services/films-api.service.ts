import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Respuesta } from '../interfaces/interfaces'


const apiKey= environment.apiKey;
const apiUrl = environment.apiUrl;
const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTlkNGViNDlhMGYzMTBmZTJlM2MzYWI1ZDliNWU5ZSIsInN1YiI6IjY1N2M4ZjMyNTY0ZWM3MDEzOGJlM2FiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xWNzbtQwnkdvpmnWDdcU7cRcbUwrLMTNCf6t8zjqca4'
  })
}


@Injectable({
  providedIn: 'root'
})
export class FilmsApiService {

  pagina = 0;

  constructor(private http: HttpClient) { }

  obtenerfilms(){
    this.pagina++;
    return this.http.get<Respuesta>(apiUrl + `trending/all/week?language=en-US&page=${this.pagina}`, options)
  }

}
