import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../actions'
import Layout from '../../components/Layout'
import './style.css'

const ProductListPage = props => {
  const product = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    const { match } = props
    dispatch(getProductsBySlug(match.params.slug))
  }, [])

  console.log(product.productsByPrice)
  return (
    <Layout>
      {Object.keys(product.productsByPrice).map((key, index) => (
        <div className='card'>
          <div className='cardHeader'>
            <div>Samsung mobile under 10k</div>
            <button>view all</button>
          </div>
          <div>
            {product.productByPrice[key] &&
              product.productByPrice[key].map(product => (
                <div className='productContainer'>
                  <div className='productImgContainer'>
                    <img src={product.productPictures[0].img} alt='' />
                  </div>
                  <div className='productInfo'>
                    <div style={{ margin: '5px 0' }}>{product.name}</div>
                    <div>
                      <span>4.3</span>&nbsp;
                      <span>3353</span>
                    </div>
                    <div className='productPrice'>{product.price}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </Layout>
  )
}
export default ProductListPage
