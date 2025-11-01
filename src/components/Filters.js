import { useState } from 'react'
import './Filters.css'
import ShowHideFilter from './ShowHideFilter'
import RecommendedFilter from './RecommendedFilter'

const Filters = () => {
  const [hideFilter, setHideFilter] = useState(false)
  const [recommended, setRecommended] = useState(false)
  const handleHideFilter = () => {
    setHideFilter(prev => !prev)
  }
  const handleRecommendedFilter = () => {
    setRecommended(prev => !prev)
  }
  return (
    <div className="filter-container">
      <span className="hide-and-show-filter">
        3425 Itmes  
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.72125 5.9949L7.06792 10.3416C7.58125 10.8549 8.42125 10.8549 8.93458 10.3416L13.2813 5.9949" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <button onClick={handleHideFilter}>{hideFilter ? "SHOW FILTER": "HIDE FILTER"}</button>
        <ShowHideFilter filter={hideFilter}/>
      </span>
      <span className="recommended-filter">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.72125 5.9949L7.06792 10.3416C7.58125 10.8549 8.42125 10.8549 8.93458 10.3416L13.2813 5.9949" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        <button onClick={handleRecommendedFilter}>RECOMMENDED</button>
        <RecommendedFilter recommended={recommended}/>
      </span>
    </div>
  )
}

export default Filters
