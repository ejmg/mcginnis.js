class List extends React.Component {
  render() {
    // Render a list using the "friends" being passed in.

    return (
      <ul>
        {/* 
            be careful, index can break; i.e. 
            what happens when you delete a friend?
         */}
        {this.props.friends.map((f, i) => (
          <li key={ i }>
            { f }
          </li>
        ))}
      </ul>
    )
  }
}

ReactDOM.render(
  <List friends={[
    'Mikenzi',
    'Cash',
    'Steven',
    'Kimmy',
    'Doug'
  ]} />,
  document.getElementById('app')
);
