import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ProductList from './ProductList'
import * as productActions from '../actions/productActions'
import * as cartActions from '../actions/cartActions'

class ProductListContainer extends Component {
  constructor(props) {
    super(props)

    this.handleOnAddItem = this.handleOnAddItem.bind(this)
  }

  async componentWillMount() {
    await this.props.productActions.fetchProducts()
  }

  handleOnAddItem(item) {
    this.props.cartActions.addCartItem(item)
  }

  render() {
    return (
      <ProductList
        products={this.props.products}
        loading={this.props.loading}
        onAddItem={this.handleOnAddItem}
      />
    )
  }
}

ProductListContainer.defaultProps = {
  products: [],
}

ProductListContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  productActions: PropTypes.objectOf(PropTypes.func).isRequired,
  cartActions: PropTypes.objectOf(PropTypes.func).isRequired,
}

const mapStateToProps = state => ({
  products: state.productList.products,
  loading: state.productList.loading,

})

const mapDispatchToProps = dispatch => ({
  productActions: bindActionCreators(productActions, dispatch),
  cartActions: bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)
