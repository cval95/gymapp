import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Exerises</h1>
        </Link>
        <Link><h1>Routines</h1></Link>
      </div>
    </header>
  )
}

export default Navbar