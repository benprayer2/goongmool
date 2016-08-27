import _ from 'lodash';

import React from 'react';
import { Grid } from 'react-bootstrap';
import { GlobalNavbar } from '../components/contrib';
import { AggregationItem } from '../components/explore';

const ExploreContainer = () => (
  <div id="explore" className="react-container">
    <GlobalNavbar />
    <Grid>
      {
        _.map(_.range(5), key =>
          <AggregationItem key={key} />
        )
      }
    </Grid>
  </div>
);

export default ExploreContainer;