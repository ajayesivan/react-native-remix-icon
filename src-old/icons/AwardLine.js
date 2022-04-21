import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAwardLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 15.245v6.872a.5.5 0 01-.757.429L12 20l-4.243 2.546a.5.5 0 01-.757-.43v-6.87a8 8 0 1110 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0112 17a7.978 7.978 0 01-3-.582zM12 15a6 6 0 100-12 6 6 0 000 12z" />
    </Svg>
  );
}

export default SvgAwardLine;
