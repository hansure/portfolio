import Home from './components'
import './App.css'
import {Route} from 'react-router-dom'
import {CssBaseline } from '@material-ui/core'
import Resume from "./components/Resume"
import Contact from "./components/contact"
function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume} />
      <Route path='/contact' component={Contact} />
    </>
  )
}
export default App
