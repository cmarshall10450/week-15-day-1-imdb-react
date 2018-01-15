import React, { Component } from 'react';
import Film from './Film';

export class FilmList extends Component {
  render() {
    const filmNodes = this.props.films.map(film => <Film title={film} />);

    return <div className="film-list">{filmNodes}</div>;
  }
}

export default FilmList;
