import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'

import Product from './Product'

const ProductList = ({
  products,
  loading,
  onAddItem,
}) => (
  <section className="container">
    {loading && <span>Cargando datos...</span>}

    <div className="row">
      {
        products.map(product => (
          <Product
            key={uuid.v4()}
            {...product}
            onAddItem={onAddItem}
          />
        ))
      }
    </div>
  </section>
)

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  onAddItem: PropTypes.func.isRequired,
}

export default ProductList
