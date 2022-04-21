import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSignalWifi2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.917 17.917 0 0112 3zm0 9c-1.42 0-2.764.33-3.959.915L12 17.817l3.958-4.902A8.96 8.96 0 0012 12zm0-7c-3.028 0-5.923.842-8.42 2.392l3.178 3.935A10.953 10.953 0 0112 10c1.898 0 3.683.48 5.241 1.327L20.42 7.39A15.928 15.928 0 0012 5z" />
    </Svg>
  );
}

export default SvgSignalWifi2Line;
