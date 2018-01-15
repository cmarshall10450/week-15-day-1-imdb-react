import React, { Component } from 'react';
import FilmList from './FilmList';

export class FilmBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [
        'Sausage Party',
        'Cafe Society',
        'Morgan',
        'The 9th Life of Louis Drax',
        'Naam Hai Akira',
        'Equity',
        'Things to Come',
      ],
    };
  }

  render() {
    const { title } = this.props;
    return (
      <div className="film-box">
        <h1>{title}</h1>
        <FilmList films={this.state.films} />
        <a href="#">See more opening this week</a>
        <button className="btn">Get Showtimes</button>
      </div>
    );
  }
}

export default FilmBox;
