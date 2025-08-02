
import { Link, Outlet } from 'react-router'
import './App.css'
import { ModeToggle } from './components/ui/mode-toggle'
// import { Button } from './components/ui/button'

function App() {

  return (
    <div>
      <div className='flex justify-center items-center gap-10'>
        <Link className='m-3' to="/tasks">Tasks</Link>
        <Link to="/user">Users</Link>
        <ModeToggle></ModeToggle>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default App
