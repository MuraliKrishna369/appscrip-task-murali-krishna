import { useState } from 'react'
import './Filters.css'
import RecommendedFilter from './RecommendedFilter'

const Filters = ({sendDataToParent}) => {
  const [hideFilter, setHideFilter] = useState(false)
  const [recommended, setRecommended] = useState(false)
  const handleHideFilter = () => {
    setHideFilter(prev => !prev)
    sendDataToParent(hideFilter)
  }
  const handleRecommendedFilter = () => {
    setRecommended(prev => !prev)
  }
  return (
    <div className="filter-container">
      <span className="hide-and-show-filter">
        <span className='number-of-items'>3425 Itmes</span>
        <svg className='down-arrow' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.72125 5.9949L7.06792 10.3416C7.58125 10.8549 8.42125 10.8549 8.93458 10.3416L13.2813 5.9949" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <button className='filter-button-for-large-devices' onClick={handleHideFilter}>{hideFilter ? "SHOW FILTER": "HIDE FILTER"}</button>
        <button className='filter-button-for-small-devices home-shop-btn' onClick={handleHideFilter}>FILTER</button>
      </span>
      <span className="recommended-filter">
          <svg className='down-arrow'  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.72125 5.9949L7.06792 10.3416C7.58125 10.8549 8.42125 10.8549 8.93458 10.3416L13.2813 5.9949" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        <button className='home-shop-btn recommended-btn' onClick={handleRecommendedFilter}>RECOMMENDED</button>
        <RecommendedFilter recommended={recommended}/>
      </span>
    </div>
  )
}

export default Filters
