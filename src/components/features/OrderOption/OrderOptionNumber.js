import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../utils/formatPrice';

import styles from './OrderOption.scss';

const OrderOptionNumber = ({ defaultValue, currentValue, limits, setOptionValue, price }) => (
  <div className={styles.number}>
    <input
      className={styles.inputSmall}
      type="number"
      defaultValue={defaultValue}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
    {formatPrice(price)}
  </div >
);


OrderOptionNumber.propTypes = {
  limits: PropTypes.object,
  defaultValue: PropTypes.number,
  currentValue: PropTypes.func,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};

export default OrderOptionNumber;
