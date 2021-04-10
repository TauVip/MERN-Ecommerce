import { Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './containers/Home'
import Signin from './containers/Signin'
import Signup from './containers/Signup'
import PrivateRoute from './components/HOC/PrivateRoute'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInitialData, isUserLoggedIn } from './actions'
import Products from './containers/Products'
import Orders from './containers/Orders'
import Category from './containers/Category'

function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn())
    }
    dispatch(getInitialData())
  }, [])

  return (
    <div className='App'>
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute path='/category' component={Category} />
        <PrivateRoute path='/products' component={Products} />
        <PrivateRoute path='/orders' component={Orders} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </div>
  )
}

export default App
