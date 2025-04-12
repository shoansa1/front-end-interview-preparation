import React from "react";

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shahid",
      age: 33,
    };
  }

  render() {
    return (
      <div>
       <p>{this.state.name}</p>
      </div>
    );
  }
}
export default ExampleComponent;