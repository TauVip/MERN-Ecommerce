import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrder } from '../../actions'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'

import './style.css'

const Orders = props => {
  const order = useSelector(state => state.order)
  const [type, setType] = useState('')
  const dispatch = useDispatch()

  const onOrderUpdate = orderId => {
    const payload = { orderId, type }
    dispatch(updateOrder(payload))
  }

  return (
    <Layout sidebar>
      {order.orders.map((orderItem, i) => (
        <Card headerleft={orderItem._id} key={i}>
          <div
            style={{
              boxSizing: 'border-box',
              padding: '100px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div className='orderTrack'>
              <div className='orderStatus'>
                <div className='point'></div>
                <div className='orderInfo'>
                  <div className='status'>Ordered</div>
                  <div className='date'>Fri, 2020</div>
                </div>
              </div>
              <div className='orderStatus'>
                <div className='point'></div>
                <div className='orderInfo'>
                  <div className='status'>Packed</div>
                  <div className='date'>Fri, 2020</div>
                </div>
              </div>
              <div className='orderStatus'>
                <div className='point'></div>
                <div className='orderInfo'>
                  <div className='status'>Shipped</div>
                  <div className='date'>Fri, 2020</div>
                </div>
              </div>
              <div className='orderStatus'>
                <div className='point'></div>
                <div className='orderInfo'>
                  <div className='status'>Delivered</div>
                  <div className='date'>Fri, 2020</div>
                </div>
              </div>
            </div>

            <div style={{ padding: '0 50px', boxSizing: 'border-box' }}>
              <select onChange={e => setType(e.target.value)}>
                <option value=''>select status</option>
                {orderItem.orderStatus.map(status => (
                  <Fragment key={status.type}>
                    {!status.isCompleted && (
                      <option value={status.type}>{status.type}</option>
                    )}
                  </Fragment>
                ))}
              </select>
            </div>

            <div style={{ padding: '0 50px', boxSizing: 'border-box' }}>
              <button onClick={() => onOrderUpdate(orderItem._id)}>
                confirm
              </button>
            </div>
          </div>
        </Card>
      ))}
    </Layout>
  )
}
export default Orders
