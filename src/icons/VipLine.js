import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgVipLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2 19h20v2H2v-2zm9-11h2v8h-2V8zM7.965 8h2.125l-2.986 7.964h-2L2.118 8h2.125l1.861 5.113L7.965 8zM17 14v2h-2V8h4a3 3 0 010 6h-2zm0-4v2h2a1 1 0 000-2h-2zM2 3h20v2H2V3z" />
    </Svg>
  );
}

export default SvgVipLine;
