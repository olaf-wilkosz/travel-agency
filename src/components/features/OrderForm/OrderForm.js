import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

import pricing from '../../../data/pricing.json';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({ tripCost, options, id, setOrderOption }) => (
  <Row>
    {pricing.map(pricingOption => (
      <Col md={4} key={pricingOption.id} >
        <OrderOption {...pricingOption} currentValue={options[id]} setOrderOption={setOrderOption}/>
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  id: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
