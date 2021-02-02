import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgOilFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8 5h11a1 1 0 011 1v15a1 1 0 01-1 1H5a1 1 0 01-1-1V11l4-6zm5-4h5a1 1 0 011 1v2h-7V2a1 1 0 011-1zM6 12v7h2v-7H6z" />
    </Svg>
  );
}

export default SvgOilFill;
