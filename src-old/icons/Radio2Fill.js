import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRadio2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3H6zm3 12a3 3 0 100-6 3 3 0 000 6zm5-6v2h4V9h-4zm0 4v2h4v-2h-4z" />
    </Svg>
  );
}

export default SvgRadio2Fill;
