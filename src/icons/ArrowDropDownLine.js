import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowDropDownLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" />
    </Svg>
  );
}

export default SvgArrowDropDownLine;
