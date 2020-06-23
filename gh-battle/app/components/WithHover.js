import React from 'react';


export default function withHover(Component, hovPropName = "hovering") {
  return class WithHover extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        hovering: false,
      };

      this.mouseOver = this.mouseOver.bind(this);
      this.mouseOut = this.mouseOut.bind(this);      
    }
    mouseOver () {
      console.log("mouseover");
      this.setState({
        hovering: true
      });
    }
    mouseOut () {
      console.log("mouseout");
      this.setState({
        hovering: false,
      });
    }
    render () {

      const props = {
        [hovPropName]: this.state.hovering,
        ...this.props,
      };
      return (
        <div onMouseOver={ this.mouseOver }
             onMouseOut={ this.mouseOut }
        >
            <Component { ...props }/>
        </div>
      );
    }
  };
}
