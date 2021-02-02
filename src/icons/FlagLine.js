import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFlagLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5 16v6H3V3h9.382a1 1 0 01.894.553L14 5h6a1 1 0 011 1v11a1 1 0 01-1 1h-6.382a1 1 0 01-.894-.553L12 16H5zM5 5v9h8.236l1 2H19V7h-6.236l-1-2H5z" />
    </Svg>
  );
}

export default SvgFlagLine;
