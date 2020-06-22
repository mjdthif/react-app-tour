import React, { useState, Component } from "react";
import "./Tour.scss";
import tourData from "../../tourData";
class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    };
  }

  showInfoHandler = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { id, name, img, city, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className="Tour">
        <div className="img-container">
          <img src={img} alt="Tour" />
          <span
            className="close-btn"
            onClick={() => {
              removeTour(id);
            }}
          >
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            <span onClick={this.showInfoHandler}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          <p>{this.state.showInfo && <p>{info}</p>}</p>
        </div>
      </article>
    );
  }
}

export default Tour;
