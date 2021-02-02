import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWaterFlashFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.636 6.636L12 .272l6.364 6.364a9 9 0 11-12.728 0zM13 11V6.5L8.5 13H11v4.5l4.5-6.5H13z" />
    </Svg>
  );
}

export default SvgWaterFlashFill;
