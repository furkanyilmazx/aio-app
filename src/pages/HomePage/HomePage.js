import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import '../Pages.scss';

class HomePage extends Component {
  render() {
    return (
      <div>
        <p>Hello from HomePage!</p>
        <p>
          <Link to="/connected">Connected Page</Link>
          <i className="fa fa-bars" />
        </p>
      </div>
    );
  }
}

export default HomePage;
