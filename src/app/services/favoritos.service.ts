import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Film } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  favoritos: Film[] = [];
  // favoritosClickeados: number[] = [];

  constructor(private storage: Storage, private toastController: ToastController) { 
    this.storage.create();
    // this.cargarFavoritosClickeados();
    this.cargarFavoritos();
  }

  // async cargarFavoritosClickeados(){
  //   const clickeados = await this.storage.get('favoritosClickeados');

  //   if (clickeados){
  //     this.favoritosClickeados = clickeados;
  //   }
  // }

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
      // this.favoritosClickeados.unshift(film.id);
      console.log('despues de añadir:', this.favoritos);
      console.log('Añadido a favs desde el servicio!')
      this.mostrarToast('Pelicula añadida a tu lista');
    }else{
      this.eliminarFavorito(film);
      console.log("Lo quite desde servicio!")
    }
    this.storage.set('favoritos', this.favoritos);
    // this.storage.set('favoritosClickeados', this.favoritosClickeados);

  }

  eliminarFavorito(favorito: Film){
    console.log('Antes de eliminar:', this.favoritos);
    this.favoritos = this.favoritos.filter(pelicula => pelicula.id !== favorito.id);
    // this.favoritosClickeados = this.favoritosClickeados.filter(id => id !== favorito.id);
    console.log('Después de eliminar:', this.favoritos);
    this.storage.set('favoritos', this.favoritos);
    // this.storage.set('favoritosClickeados', this.favoritosClickeados);
    this.mostrarToast('Película eliminada de tu lista');
  }
}
