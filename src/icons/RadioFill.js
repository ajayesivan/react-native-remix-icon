import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRadioFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 10h3V6H4v4h11V8h2v2zM6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3H6zm1 16a3 3 0 100-6 3 3 0 000 6z" />
    </Svg>
  );
}

export default SvgRadioFill;
