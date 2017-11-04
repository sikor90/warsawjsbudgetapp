import React, { Component } from 'react';


class HelloStateful extends Component {
  render() {
    return (
      <div className="HelloStateful">
        Witaj {this.props.name}
      </div>
    );
  }
}

export default HelloStateful;
