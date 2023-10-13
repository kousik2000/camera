import React from 'react';
import { GoogleAd } from 'react-google-ads';

const AdComponent = () => {
  const adCode = 'YOUR_AD_CODE';

  return (
    <GoogleAd
      adCode={adCode}
    />
  );
};

export default AdComponent;