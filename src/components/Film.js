import React, { Component } from 'react';

export class Film extends Component {
  render() {
    const link = this.props.title.replace(/\s+/g, '-').toLowerCase();

    return (
      <div className="film">
        {this.props.title}
        <a href={`/${link}`}>Showtimes</a>
      </div>
    );
  }
}

export default Film;
