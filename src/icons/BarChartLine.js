import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBarChartLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 12h2v9H3v-9zm16-4h2v13h-2V8zm-8-6h2v19h-2V2z" />
    </Svg>
  );
}

export default SvgBarChartLine;
