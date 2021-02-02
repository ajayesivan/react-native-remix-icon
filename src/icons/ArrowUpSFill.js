import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowUpSFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 8l6 6H6z" />
    </Svg>
  );
}

export default SvgArrowUpSFill;
