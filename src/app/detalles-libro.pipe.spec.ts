import { DetallesFilmPipe } from './detalles-film.pipe';

describe('FilmDetailsPipe', () => {
  it('create an instance', () => {
    const pipe = new DetallesFilmPipe();
    expect(pipe).toBeTruthy();
  });
});
