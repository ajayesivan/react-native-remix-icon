import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDualSim1Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M15 2l4.707 4.707a1 1 0 01.293.707V21a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h10zm-2 6h-3v2h1v6h2V8z" />
    </Svg>
  );
}

export default SvgDualSim1Fill;
