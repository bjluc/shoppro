import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To BestTaste',
  keywords: 'Seafood Paella, Wild Musshroom Risotto, Uzbek Pilov',
  description: 'We sell the best products in Woodgreen area',
};

export default Meta;
