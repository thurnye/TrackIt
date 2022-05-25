import React, { FC } from 'react';
import styles from './LineChart.module.scss';
import { ResponsiveBump } from '@nivo/bump'
import data from './data.json'

interface LineChartProps {
}
const LineChart: FC<LineChartProps> = () => { 
  
  const MyResponsiveBump = ({data}: any) => (
    <ResponsiveBump
        data={data}
        xOuterPadding={0.1}
        yOuterPadding={1}
        colors={{ scheme: 'paired' }}
        activeLineWidth={3}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        startLabelTextColor={{ from: 'color', modifiers: [] }}
        pointSize={1}
        activePointSize={3}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ranking',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        margin={{ top: 20, right: 90, bottom: 40, left: 60 }}
        axisRight={null}
    />
  )
  return( 
  <div className={styles.LineChart} data-testid="LineChart">
    <MyResponsiveBump data={data} />
  </div>
);
}
export default LineChart;
