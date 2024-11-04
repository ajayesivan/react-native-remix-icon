import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContractLeftRightLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.793 5.793L12.586 12l6.207 6.207 1.414-1.414L15.414 12l4.793-4.793-1.414-1.414zM5.207 18.207L11.414 12 5.207 5.793 3.793 7.207 8.586 12l-4.793 4.793 1.414 1.414z" />
    </Svg>
  );
}

export default SvgContractLeftRightLine;
