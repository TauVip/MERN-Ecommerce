import axios from '../helpers/axios'

export const addProduct = form => async dispatch => {
  const res = await axios.post('product/create', form)
}
