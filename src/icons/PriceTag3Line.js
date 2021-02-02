import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPriceTag3Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 01-1.414 0l-9.9-9.9a1 1 0 010-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 112.83-2.829 2 2 0 01-2.83 2.829z" />
    </Svg>
  );
}

export default SvgPriceTag3Line;
