import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './containers/HomePage'
import ProductListPage from './containers/ProductListPage'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/:slug' component={ProductListPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
