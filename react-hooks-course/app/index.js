import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'

const Popular = React.lazy(() => import('./components/Popular'))
const Battle = React.lazy(() => import('./components/Battle'))
const Results = React.lazy(() => import('./components/Results'))

function App () {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = () => {
    setTheme((theme) => {
      return theme === "light" ? "dark" : "light"
    })
  }

  const value = React.useMemo(() => ({
    theme,
    toggleTheme
  }), [theme])

  return (
    <React.Fragment>
      <Router>
      <ThemeProvider value={value}>
        <div className="container">
          <Nav/>

          <React.Suspense fallback={ <Loading />} >
            <Switch>
              <Route exact path='/' component={Popular} />
              <Route exact path='/battle' component={Battle} />
              <Route path='/battle/results' component={Results} />
              <Route render={() => <h1>404</h1>} />              
            </Switch>
          </React.Suspense>
        </div>
      </ThemeProvider>
      </Router>
    </React.Fragment>
  )
  
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
