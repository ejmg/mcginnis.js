import React from 'react';

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all'
    };
    this.updateLang = this.updateLang.bind(this);
  }

  updateLang(selected) {
    this.setState({
      selected
    })
  }
  render() {
    const languages = ['all', 'js', 'rb', 'java', 'css', 'py', 'rs', 'hs', 'elm'];
    
    return (
      <ul className="flex-center" >
          {
          languages.map((l) => (
          <li key={l}>
              {/*
              we pass an anonymous function here instead of just `this.updateLang(l)
              because, otherwise, the expression immediately gets rendered upon eval
              */}
              <button className="btn-clear nav-link"
                      style={ l === this.state.selected ? { color: 'rgb(187, 46, 31)' } : null }
                      onClick={ () => this.updateLang(l) }>
                  { l }
              </button>
          </li>
          ))
          }
      </ul>
    )
  }
}


