import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSteering2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM8 13l-3.938.001A8.004 8.004 0 0011 19.938V16a3 3 0 01-3-3zm11.938.001L16 13a3 3 0 01-3 3l.001 3.938a8.004 8.004 0 006.937-6.937zM12 4a8.001 8.001 0 00-7.938 7H8a1 1 0 011-1h6a1 1 0 011 1h3.938A8.001 8.001 0 0012 4z" />
    </Svg>
  );
}

export default SvgSteering2Fill;
