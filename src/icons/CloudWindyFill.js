import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCloudWindyFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 18v-3.993H2.074a8 8 0 0114.383-6.908A5.5 5.5 0 1117.5 18h-3.499zm-8 2h10v2H6v-2zm-4-4h10v2H2v-2z" />
    </Svg>
  );
}

export default SvgCloudWindyFill;
