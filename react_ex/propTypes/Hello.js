class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

Hello.propTypes = {
  name: PropTypes.string.isRequired
}
