import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContractLeftLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.071 4.929l1.414 1.414L11.83 11H21v2H11.83l4.656 4.657-1.414 1.414L8.001 12l7.07-7.071zm-11.07 14.07V5h2v14H4z" />
    </Svg>
  );
}

export default SvgContractLeftLine;
