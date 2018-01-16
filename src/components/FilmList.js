import React, { Component } from 'react';
import Film from './Film';

export class FilmList extends Component {
  render() {
    const filmNodes = this.props.films.map(film => (
      <Film key={film.id} title={film.title} />
    ));

    return <div className="film-list">{filmNodes}</div>;
  }
}

export default FilmList;
