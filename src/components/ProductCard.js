
import './ProductCard.css'


const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
        <img className='product-image' alt={product.title} src={product.image}/>
        <p>{product.title}</p>
    </div>
  )
}

export default ProductCard
