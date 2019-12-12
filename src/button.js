import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div style={{ color: this.props.color }} onClick={this.props.data}>
        {this.props.judul}
        <h5>APaaan aja</h5>
      </div>
    );
  }
}
export default Button;

// export default ({ color, data, judul }) => {
//   const [title, settitle] = useState("");

//   settitleartike = () => {
//     settitle("artikel 1");
//   };

//   return (
//     <React.Fragment>
//       <p>{judul}</p>
//       <p>{title}</p>
//     </React.Fragment>
//   );
// };
