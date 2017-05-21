import React from 'react'
import PropTypes from 'prop-types'

const ProductDetail = ({
  product,
  loading,
  ondAddItem,
}) => (
  <section className="container">
    { !loading && product ?
      <div className="row">
        <figure className="figure col-lg-6">
          <img className="figure-img img-thumbnail rounded" src={product.image} alt={product.description} />
        </figure>
        <div className="col-lg-6">
          <br />
          <h4>{name}</h4>
          <ul className="list-group">
            <li className="list-group-item">
              Precio: <strong>$ {product.price}</strong>
            </li>
            <li className="list-group-item">
              Entrega: <strong>{product.deliveryStimate}</strong>
            </li>
            <li className="list-group-item">
              Categoría: <span className="badge badge-pill badge-info">{product.category}</span>
            </li>
          </ul>
          <br />
          <button
            className="btn btn-primary"
            onClick={() => ondAddItem(product)}
          >
            <span className="fa fa-cart-plus" />
          </button>
        </div>
      </div> :
      <span>Cargando datos...</span>
    }
  </section>
)

ProductDetail.defaultProps = {
  product: null,
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  ondAddItem: PropTypes.func.isRequired,
}

export default ProductDetail
