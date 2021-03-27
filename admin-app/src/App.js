import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './containers/Home'
import Signin from './containers/Signin'
import Signup from './containers/Signup'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
