import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAwardFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 15.245v6.872a.5.5 0 01-.757.429L12 20l-4.243 2.546a.5.5 0 01-.757-.43v-6.87a8 8 0 1110 0zM12 15a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 110-8 4 4 0 010 8z" />
    </Svg>
  );
}

export default SvgAwardFill;
