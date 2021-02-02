import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGenderlessLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 7.066A7.501 7.501 0 0112 22a7.5 7.5 0 01-1-14.934V1h2v6.066zM12 20a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" />
    </Svg>
  );
}

export default SvgGenderlessLine;
