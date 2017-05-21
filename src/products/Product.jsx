import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const Product = ({
  _id,
  name,
  description,
  image,
  price,
  deliveryStimate,
  category,
  onAddItem,
}) => (
  <div className="col-xs-12 col-sm-6 col-lg-4">
    <div className="card">
      <Link to={`/detail/${_id}`}>
        <img className="card-img-top img-fluid" src={image} alt={description} />
      </Link>

      <div className="card-block">
        <Link to={`/detail/${_id}`}>
          <h4 className="card-title">{name}</h4>
        </Link>
        <p className="card-text">{description}</p>
      </div>

      <ul className="list-group-flush">
        <li className="list-group-item">
          <strong>${price}</strong>
        </li>
        <li className="list-group-item">
          <strong>Entrega: </strong>{deliveryStimate}
        </li>
        <li className="list-group-item">
          <span className="badge badge-pill badge-info">{category}</span>
        </li>
      </ul>

      <div className="card-block">
        <button
          className="btn btn-primary"
          onClick={() => onAddItem({
            _id,
            name,
            description,
            image,
            price,
            deliveryStimate,
            category,
          })}
        >
          <span className="fa fa-cart-plus" /> Añadir al carrito
        </button>
      </div>
    </div>
  </div>
)

Product.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deliveryStimate: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onAddItem: PropTypes.func.isRequired,
}

export default Product
