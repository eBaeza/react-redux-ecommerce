import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as productActions from '../actions/productActions'
import * as cartActions from '../actions/cartActions'

import ProductDetail from './ProductDetail'


class ProductDetailContainer extends Component {
  constructor(props) {
    super(props)

    this.handleOnAddItem = this.handleOnAddItem.bind(this)
  }

  async componentWillMount() {
    await this.props.productActions.fetchProduct(this.props.id)
  }

  handleOnAddItem(item) {
    this.props.cartActions.addCartItem(item)
  }

  render() {
    return (
      <ProductDetail
        product={this.props.product}
        loading={this.props.loading}
        ondAddItem={this.handleOnAddItem}
      />
    )
  }
}

ProductDetailContainer.defaultProps = {
  product: null,
}

ProductDetailContainer.propTypes = {
  id: PropTypes.string.isRequired,
  product: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  cartActions: PropTypes.objectOf(PropTypes.func).isRequired,
  productActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.params.id,
  product: state.activeProduct.product,
  loading: state.activeProduct.loading,
})

const mapDisPatchToProps = dispatch => ({
  cartActions: bindActionCreators(cartActions, dispatch),
  productActions: bindActionCreators(productActions, dispatch),
})

export default connect(mapStateToProps, mapDisPatchToProps)(ProductDetailContainer)
