import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgNpmjsFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 3a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16zm-3 4H7v10h5V9.5h2.5V17H17V7z" />
    </Svg>
  );
}

export default SvgNpmjsFill;
