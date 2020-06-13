import React from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../utils/api';

function LangNav({ selected, updateLang}) {
  const languages = ['all', 'js', 'ruby', 'java', 'css', 'python', 'rust', 'haskell', 'elm'];
  
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

LangNav.propTypes = {
  selected: PropTypes.string.isRequired,
  updateLang: PropTypes.func.isRequired
}

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      repos: null,
      error: null,
    };
    this.updateLang = this.updateLang.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }
  componentDidMount() {
    this.updateLang(this.state.selected)
  }
  updateLang(selected) {
    this.setState({
      selected,
      repos: null,
      error: null,
    })
    fetchPopularRepos(selected)
        .then((repos) => this.setState({
          repos,
          error: null
        }))
        .catch(() => {
          console.warn('Error fetching repos: ', error);
          this.setState({
            error: `There was an error fetching the repos`
          });
        })
  }
  isLoading () {
    return this.state.repos === null && this.state.error === null
  }
  render() {
    const { selected, repos, error } = this.state;
    return (
      <React.Fragment>
          <LangNav selected={ selected }
                   updateLang={ this.updateLang }>
          </LangNav>

          { this.isLoading() && <p> LOADING </p> }
          { error  && <p>{ error }</p> }
          { repos  && <pre>{ JSON.stringify(repos, null, 2) }</pre> }

      </React.Fragment>
      
    )
  }
}

