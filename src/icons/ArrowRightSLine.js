import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowRightSLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
    </Svg>
  );
}

export default SvgArrowRightSLine;
