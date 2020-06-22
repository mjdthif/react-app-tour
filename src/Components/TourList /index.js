import React, { Component } from "react";
import "./Tourlist.scss";
import Tour from "../Tour/Tour.js";
import tourData from "../../tourData.js";
class Torulist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: tourData,
    };
  }
  removeTour = (id) => {
    const { tours } = this.state;
    const sortedTours = tours.filter((tour) => tour.id !== id);
    this.setState((prevState) => ({
      tours: sortedTours,
    }));
  };

  render() {
    const { tours } = this.state;
    return (
      <section className="Tour-list">
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>
          );
        })}
      </section>
    );
  }
}

export default Torulist;
