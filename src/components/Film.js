import React, { Component } from 'react';

export class Film extends Component {
  render() {
    return (
      <div className="film">
        {this.props.title}
        <a href={`/${this.props.title}`}>showtimes</a>
      </div>
    );
  }
}

export default Film;
