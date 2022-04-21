import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPhoneCameraLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14.803 4a5.96 5.96 0 00-.72 2H3v12h18v-5.083a5.96 5.96 0 002-.72V19a.996.996 0 01-1.002 1.001H2.002A1 1 0 011 19V5c0-.552.44-1 1.002-1h12.8zM20 9a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8zm-2 2h2v3h-2v-3z" />
    </Svg>
  );
}

export default SvgPhoneCameraLine;
