import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilePdfFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-4 14a4 4 0 100-8H8v8h4zm-2-6h2a2 2 0 110 4h-2v-4z" />
    </Svg>
  );
}

export default SvgFilePdfFill;
