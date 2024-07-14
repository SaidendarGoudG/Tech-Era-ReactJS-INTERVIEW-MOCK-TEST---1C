import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav-header">
    <Link to="/">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </div>
)

export default withRouter(Header)
