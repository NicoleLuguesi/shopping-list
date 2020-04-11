import React, { Component } from "react";
import { apiCall, nutritionAPI } from "../api/nutritionAPI";

class Nutrition extends Component {
  state = {
    sodium: 0,
  };

  componentDidMount() {
    try {
      nutritionAPI(this.props.items[0].name).then((res) => {
        console.log(res);
        this.setState({
          sodium: res.foods[0].nf_sodium,
        });
      });
      
    } catch (error) { console.error(error)
      
    }
   
  }
  render() {
    return (
      <div>
        <span>Sodium: {this.state.sodium}</span>
      </div>
    );
  }
}

export default Nutrition;
