import React, { FC } from 'react';
import { ResponsiveBullet } from '@nivo/bullet'
import styles from './Range.module.scss';

interface RangeProps {}

const Range: FC<RangeProps> = () => {


  const MyResponsiveBullet = ({ data /* see data tab */ }: any) => (
    <ResponsiveBullet
        data={data}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={46}
        titleAlign="start"
        titleOffsetX={-70}
        measureSize={0.2}
        measureColors="seq:yellow_orange_red"
    />
)
  return(
  <div className={styles.Range} data-testid="Range">
    Range Component
  </div>
);
}
export default Range;
