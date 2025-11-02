import { useState } from "react";
import {showHideFiltersList} from '../utils/constants'

const ShowHideFilter = ({filter}) => {
  const [filteredList, setFilteredList] = useState(showHideFiltersList)
  if (!filter)  return;
  const handleFilterOptions = (id) => {
    const filteredList = showHideFiltersList.map(element => {
        if(element.id === id){
            if(element.isFilterOpened){
                element.isFilterOpened = false
                return element
            }
            element.isFilterOpened = true
        }
       
        return element
    });

    setFilteredList(filteredList)
  }
  return (
    <div className='shown-filter-options'>
        <div>
            <input type='checkbox'/>
            <label>CUSTOMIZBLE</label>
        </div>
            {filteredList.map(item => {
                const {id, filterName, options, isFilterOpened} = item;
                return(
                    <div className="show-hide-filter-feature-container" key={id}>
                        {/* filter feature */}
                        <div onClick={() => handleFilterOptions(id)} className='filter-option'>
                            <span>{filterName}</span>
                            {isFilterOpened ?
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.72003 10.73L7.0667 6.3849C7.58003 5.87174 8.42003 5.87174 8.93336 6.3849L13.28 10.73" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>:   
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.72125 6.00018L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            }

                        </div>
                        <p>All</p>
                        {/* filter options */}
                        {isFilterOpened &&
                            options.map(eachOption => {
                                return (
                                <div>
                                    <input type='checkbox'/>
                                    <label>{eachOption}</label><br/>
                                </div>
                                )
                                })                  
                        }
                        <hr></hr>
                    </div>
                    )
            })}
    </div>
   
  )
}

export default ShowHideFilter
