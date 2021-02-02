import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLoginCircleFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10 11H2.05c.5-5.053 4.764-9 9.95-9 5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.185 0-9.449-3.947-9.95-9H10v3l5-4-5-4v3z" />
    </Svg>
  );
}

export default SvgLoginCircleFill;
