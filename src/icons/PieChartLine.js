import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPieChartLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 2.458v2.124A8.003 8.003 0 0012 20a8.003 8.003 0 007.419-5h2.123c-1.274 4.057-5.064 7-9.542 7-5.523 0-10-4.477-10-10 0-4.478 2.943-8.268 7-9.542zM12 2c5.523 0 10 4.477 10 10 0 .338-.017.671-.05 1H11V2.05c.329-.033.662-.05 1-.05zm1 2.062V11h6.938A8.004 8.004 0 0013 4.062z" />
    </Svg>
  );
}

export default SvgPieChartLine;
