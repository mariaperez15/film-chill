import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Film } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  favoritos: Film[] = [];

  constructor(private storage: Storage, private toastController: ToastController) { 
    this.storage.create();
    this.cargarFavoritos();
  }

  esFavorito(film: Film): boolean {
    return this.favoritos.some(pelicula => pelicula.id === film.id);
  }

  async mostrarToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 800,
      position: 'bottom',
    });
    await toast.present();
  }

  async cargarFavoritos(){
    const favoritos = await this.storage.get('favoritos');

    if (favoritos){
      this.favoritos = favoritos;
    }
  }


  guardarFavorito(film: Film){
    const existe = this.favoritos.find(pelicula => pelicula.id === film.id);
    if (!existe){
      console.log('Antes de añadir:', this.favoritos);
      this.favoritos.unshift(film);
      console.log('despues de añadir:', this.favoritos);
      console.log('Añadido a favs desde el servicio!')
      this.mostrarToast('Pelicula añadida a tu lista');
    }else{
      this.eliminarFavorito(film);
      console.log("Lo quite desde servicio!")
    }
    this.storage.set('favoritos', this.favoritos);

  }

  eliminarFavorito(favorito: Film){
    console.log('Antes de eliminar:', this.favoritos);
    this.favoritos = this.favoritos.filter(pelicula => pelicula.id !== favorito.id);
    console.log('Después de eliminar:', this.favoritos);
    this.storage.set('favoritos', this.favoritos);
    this.mostrarToast('Película eliminada de tu lista');
  }
}
