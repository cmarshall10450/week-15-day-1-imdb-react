import React, { Component } from 'react';
import FilmList from './FilmList';

export class FilmBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [
        {
          id: 1,
          title: 'Sausage Party',
        },
        {
          id: 2,
          title: 'Cafe Society',
        },
        {
          id: 3,
          title: 'Cafe Society',
        },
        {
          id: 4,
          title: 'Morgan',
        },
        {
          id: 5,
          title: 'The 9th Life of Louis Drax',
        },
        {
          id: 6,
          title: 'Naam Hai Akira',
        },
        {
          id: 7,
          title: 'Equity',
        },
        {
          id: 8,
          title: 'Things to come',
        },
      ],
    };
  }

  render() {
    const { title } = this.props;
    const { films } = this.state;

    return (
      <div className="film-box">
        <h1>{title}</h1>
        <FilmList films={films} />
        <a href="#">See more opening this week</a>
        <button className="btn">Get Showtimes</button>
      </div>
    );
  }
}

export default FilmBox;
