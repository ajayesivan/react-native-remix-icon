import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRadarFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.368 4.398l-3.484 6.035 1.732 1 3.485-6.035c4.169 2.772 6.305 7.08 4.56 10.102-1.86 3.222-7.19 3.355-11.91.63C4.028 13.402 1.48 8.721 3.34 5.5c1.745-3.023 6.543-3.327 11.028-1.102zm1.516-2.625l1.732 1-1.5 2.598-1.732-1 1.5-2.598zM6.732 20H17v2H5.018a.998.998 0 01-1.015-.922.995.995 0 01.131-.578l2.25-3.897 1.732 1L6.732 20z" />
    </Svg>
  );
}

export default SvgRadarFill;
