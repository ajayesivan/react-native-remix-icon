import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSimCardLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6 4v16h12V7.828L14.172 4H6zM5 2h10l4.707 4.707a1 1 0 01.293.707V21a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zm3 10h8v6H8v-6z" />
    </Svg>
  );
}

export default SvgSimCardLine;
