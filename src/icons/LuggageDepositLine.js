import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLuggageDepositLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M15 3a1 1 0 011 1v2h4a1 1 0 011 1v12h2v2H1v-2h2V7a1 1 0 011-1h4V4a1 1 0 011-1h6zM8 8H5v11h3V8zm6 0h-4v11h4V8zm5 0h-3v11h3V8zm-5-3h-4v1h4V5z" />
    </Svg>
  );
}

export default SvgLuggageDepositLine;
