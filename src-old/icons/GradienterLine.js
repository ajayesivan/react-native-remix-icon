import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGradienterLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2.05 13h2.012a8.001 8.001 0 0015.876 0h2.013c-.502 5.053-4.766 9-9.951 9-5.185 0-9.449-3.947-9.95-9zm0-2c.5-5.053 4.764-9 9.95-9s9.449 3.947 9.95 9h-2.012a8.001 8.001 0 00-15.876 0H2.049zM12 14a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
}

export default SvgGradienterLine;
