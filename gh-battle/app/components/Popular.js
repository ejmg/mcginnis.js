import React from 'react';

function LangNav({ selected, updateLang}) {
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
                        style={ l === selected ? { color: 'rgb(187, 46, 31)' } : null }
                        onClick={ () => updateLang(l) }>
                    { l }
                </button>
            </li>
          ))
        }
    </ul>
  )  
}

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
    const { selected } = this.state;
    return (
      <React.Fragment>
          <LangNav selected={ selected }
                   updateLang={ this.updateLang }>
          </LangNav>
      </React.Fragment>
      
    )
  }
}

