import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'

import * as productActions from '../actions/productActions'

class ProductAddContainer extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault()

    const product = {
      name: this.nameInput.value,
      description: this.descriptionInput.value,
      image: this.imageInput.value,
      price: this.priceInput.value,
      deliveryStimate: this.deliveryInput.value,
      category: this.categoryInput.value,
    }

    await this.props.productActions.saveProduct(product)
    browserHistory.push('/')
  }

  render() {
    return (
      <section className="container">
        <form
          className="offset-lg-3 col-lg-6"
          onSubmit={this.handleSubmit}
        >
          <legend>Añade un nuevo producto</legend>
          <div className="form-group">
            <label htmlFor="name">Nombre: </label>
            <input
              className="form-control"
              type="text"
              name="name"
              ref={(node) => { this.nameInput = node }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción: </label>
            <input
              className="form-control"
              type="text"
              name="description"
              ref={(node) => { this.descriptionInput = node }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Imagen: </label>
            <input
              className="form-control"
              type="text"
              name="image"
              ref={(node) => { this.imageInput = node }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Precio: </label>
            <input
              className="form-control"
              type="number"
              name="price"
              ref={(node) => { this.priceInput = node }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="deliveryStimate">Entrega estimada: </label>
            <input
              className="form-control"
              type="text"
              name="deliveryStimate"
              ref={(node) => { this.deliveryInput = node }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoría: </label>
            <input
              className="form-control"
              type="text"
              name="category"
              ref={(node) => { this.categoryInput = node }}
            />
          </div>

          <div className="form-group">
            <input
              className="btn btn-primary"
              type="submit"
              value="Guardar"
            />
          </div>
        </form>
      </section>
    );
  }
}

ProductAddContainer.propTypes = {
  productActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapDispatchToProps = dispatch => ({
  productActions: bindActionCreators(productActions, dispatch),
})

export default connect(null, mapDispatchToProps)(ProductAddContainer)
