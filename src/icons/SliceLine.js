import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSliceLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.69 12.915l1.769 1.767c-6.01 6.01-10.96 6.01-15.203 4.597L17.812 3.722l3.536 3.536-5.657 5.657zm-2.827 0l5.656-5.657-.707-.707L6.314 18.048c2.732.108 5.358-.906 8.267-3.415l-1.718-1.718z" />
    </Svg>
  );
}

export default SvgSliceLine;
