import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'

import CartItem from './CartItem'

const CartItemList = ({
  items,
  onRemoveItem,
}) => (
  <div className="list-group">
    {
      items.map(item => (
        <CartItem
          key={uuid.v4()}
          {...item}
          onRemoveItem={onRemoveItem}
        />
      )).reverse()
    }
  </div>
)

CartItemList.defaultProps = {
  items: [],
}

CartItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onRemoveItem: PropTypes.func.isRequired,
}

export default CartItemList
