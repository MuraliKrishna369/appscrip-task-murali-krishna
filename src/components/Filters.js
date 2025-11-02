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
      <div className="hide-and-show-filter">
        <span className='number-of-items recommended-btn'>3425 Itmes</span>
        <div className='display-only-large-devices'>
          {hideFilter ?  
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00027 2.72125L10.3469 7.06792C10.8603 7.58125 10.8603 8.42125 10.3469 8.93458L6.00027 13.2812" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>:
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>}
        </div>

        <button className='display-only-large-devices show-filter-btn home-btn' onClick={handleHideFilter}>{hideFilter ? "SHOW FILTER": "HIDE FILTER"}</button>
        <button className='display-only-small-devices home-shop-btn recommended-btn' onClick={handleHideFilter}>FILTER</button>
      </div>
      <div className="recommended-filter-container">
        <div className='recommended-filter-button'>
          <button className='home-shop-btn recommended-btn' onClick={handleRecommendedFilter}>RECOMMENDED</button>
          <svg className='display-only-large-devices'  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.72125 5.9949L7.06792 10.3416C7.58125 10.8549 8.42125 10.8549 8.93458 10.3416L13.2813 5.9949" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <RecommendedFilter recommended={recommended}/>
      </div>
    </div>
  )
}

export default Filters
