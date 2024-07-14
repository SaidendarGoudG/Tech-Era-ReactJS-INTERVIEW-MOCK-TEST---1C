import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CourseItem from '../CourseItem'

import Header from '../Header'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    courseList: [],
  }

  componentDidMount() {
    this.getCourses()
  }

  getCourses = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))
      this.setState({
        courseList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickRetry = () => {
    this.getCourses()
  }

  renderFailureView = () => (
    <div className="error-container">
      <img
        className="error-img"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1 className="error-heading">Oops! Something Went Wrong</h1>
      <p className="error-info">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        className="error-retry-button"
        type="button"
        onClick={this.onClickRetry}
      >
        Retry
      </button>
    </div>
  )

  renderCoursesList = () => {
    const {courseList} = this.state

    return (
      <div className="course-list-container">
        <h1 className="heading">Courses</h1>
        <ul className="course-item-list">
          {courseList.map(each => (
            <CourseItem key={each.id} courseItemDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderCourses = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCoursesList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <Header />
        {this.renderCourses()}
      </div>
    )
  }
}

export default Home
