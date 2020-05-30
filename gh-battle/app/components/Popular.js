import React from 'react';

export default class Popular extends React.Component {
  render() {
    const languages = ['all', 'js', 'rb', 'java', 'css', 'py', 'rs', 'hs', 'elm'];
    
    return (
      <ul className="flex-center" >
          {
            languages.map((l) => (
              <li key={l}>
                  <button className="btn-clear nav-link">
                      { l }
                  </button>
              </li>
            ))
          }
      </ul>
    )
  }
}


