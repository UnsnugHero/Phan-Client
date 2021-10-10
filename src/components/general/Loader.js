import React from 'react';
import { LoadingGif } from '../styles/Request.style';

import loader from '../../assets/take_your_time.gif';

const Loader = () => {
  return <LoadingGif src={loader} />;
};

export default Loader;
