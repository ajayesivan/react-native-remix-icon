import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCloudWindyLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 18v-2h3.5a3.5 3.5 0 10-2.5-5.95V10a6 6 0 10-12 0v.007H1V10a8 8 0 0115.458-2.901A5.5 5.5 0 1117.5 18H14zm-8 2h10v2H6v-2zm0-8h8v2H6v-2zm-4 4h10v2H2v-2z" />
    </Svg>
  );
}

export default SvgCloudWindyLine;
