import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGovernmentLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 6h3v2h-1v11h1v2H1v-2h1V8H1V6h3V4a1 1 0 011-1h14a1 1 0 011 1v2zm0 2H4v11h3v-7h2v7h2v-7h2v7h2v-7h2v7h3V8zM6 5v1h12V5H6z" />
    </Svg>
  );
}

export default SvgGovernmentLine;
