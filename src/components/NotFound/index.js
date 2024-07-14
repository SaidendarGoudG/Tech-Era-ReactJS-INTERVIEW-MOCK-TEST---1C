import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-card-found">
      <img
        className="not-found-img"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png "
        alt="not found"
      />
      <h1 className="not-found-heading">Page Not found</h1>
      <p className="not-found-info">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
