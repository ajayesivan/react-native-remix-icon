import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTShirt2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 3a1 1 0 011 1v7a1 1 0 01-1 1h-2.001L19 20a1 1 0 01-1 1H6a1 1 0 01-1-1l-.001-8.001L3 12a1 1 0 01-1-1V4a1 1 0 011-1h6a3 3 0 006 0h6z" />
    </Svg>
  );
}

export default SvgTShirt2Fill;
