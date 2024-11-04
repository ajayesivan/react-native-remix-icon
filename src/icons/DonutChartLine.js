import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDonutChartLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 2.05v2.012a8.001 8.001 0 105.905 14.258l1.424 1.423A9.958 9.958 0 0112 22C6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zM21.95 13a9.954 9.954 0 01-2.207 5.328l-1.423-1.422A7.96 7.96 0 0019.938 13h2.013zM13.002 2.05c4.724.469 8.48 4.226 8.95 8.95h-2.013a8.004 8.004 0 00-6.937-6.938V2.049z" />
    </Svg>
  );
}

export default SvgDonutChartLine;
