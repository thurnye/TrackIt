import React, { FC } from 'react';
import styles from './AddSub.module.scss';

interface AddSubProps {}

const AddSub: FC<AddSubProps> = () => (
  <div className={styles.AddSub} data-testid="AddSub">
    AddSub Component
  </div>
);

export default AddSub;
