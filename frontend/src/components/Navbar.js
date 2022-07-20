import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Exercises</h1>
        </Link>
        <Link to="/routines"><h1>Routines</h1></Link>
      </div>
    </header>
  )
}

export default Navbar