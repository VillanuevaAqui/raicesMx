import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faDrumstickBite);

function Rating2() {
  return (
    <div>
        <FontAwesomeIcon icon={faDrumstickBite} size="2x" color="blue" />
    </div>
  );
}

export default Rating2;