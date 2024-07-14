import './index.css'

const CourseDetailsItem = props => {
  const {courseItemDetails} = props
  const {name, description, imageUrl} = courseItemDetails

  return (
    <li className="course-details-card">
      <div className="course-detail-container">
        <img className="course-img" src={imageUrl} alt={name} />
        <div className="course-info-container">
          <h1 className="title-heading">{name}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default CourseDetailsItem
