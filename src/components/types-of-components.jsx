import React from "react";

class TypeOfComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Allahabad",
    };
  }

  render() {
    return <div>{this.state.city}</div>;
  }
}

export default TypeOfComponents;
