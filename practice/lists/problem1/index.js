class List extends React.Component {
  render() {
    // Render a list using the "friends" being passed in.

    return (
      <ul>
        {this.props.friends.map((f) => (
            <li key={f.id}>
              {f.name}
            </li>
        ))}
      </ul>
    )
  }
}

ReactDOM.render(
  <List friends={[
    { id: 893, name: 'Mikenzi' },
    { id: 871, name: 'Cash' },
    { id: 982, name: 'Steven' },
    { id: 061, name: 'Kimmy' },
    { id: 117, name: 'Doug' }
  ]} />,
  document.getElementById('app')
);
