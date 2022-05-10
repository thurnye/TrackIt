import React, { FC } from 'react';
import styles from './NoMatch.module.scss';

interface NoMatchProps {}

const NoMatch: FC<NoMatchProps> = () => (
  <div className={styles.NoMatch} data-testid="NoMatch">
    NoMatch Component
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        {/* <Link to="/">Go to the home page</Link> */}
      </p>
    </div>
  </div>
);

export default NoMatch;
