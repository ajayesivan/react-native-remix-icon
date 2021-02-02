import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDualSim2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M15 2l4.707 4.707a1 1 0 01.293.707V21a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h10zm-.829 2H6v16h12V7.829L14.171 4zM12 7.5a3 3 0 012.009 5.228l-.008-.008.006.01L12.595 14H15v2H9v-1.453l3.67-3.304A1 1 0 1011 10.5H9a3 3 0 013-3z" />
    </Svg>
  );
}

export default SvgDualSim2Line;
