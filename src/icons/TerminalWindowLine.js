import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTerminalWindowLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 9V5H4v4h16zm0 2H4v8h16v-8zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm2 9h3v5H5v-5zm0-6h2v2H5V6zm4 0h2v2H9V6z" />
    </Svg>
  );
}

export default SvgTerminalWindowLine;
