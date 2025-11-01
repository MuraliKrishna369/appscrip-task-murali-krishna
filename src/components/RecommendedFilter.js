

const RecommendedFilter = ({recommended}) => {
  if(!recommended) return
  return (
        <ul className='recommended-list'>
            <li className='recommend-this'>RECOMMENDED</li>
            <li className='recommend-this'>NEWEST FIRST</li>
            <li className='recommend-this'>POPULAR</li>
            <li className='recommend-this'>PRICE:HIGH TO LOW</li>
            <li className='recommend-this'>PRICE:LOW TO HIGH</li>
        </ul>
  
  )
}

export default RecommendedFilter
