import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoonCloudyFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.67 5.007a7 7 0 017.55-3.901 4.5 4.5 0 005.674 5.674 7.038 7.038 0 01-.759 4.593A5.5 5.5 0 0117.5 21H9a8 8 0 01-.33-15.993zm2.177.207a8.016 8.016 0 015.61 4.885 5.533 5.533 0 012.96.245 4.97 4.97 0 00.488-1.37 6.502 6.502 0 01-5.878-5.88 5.003 5.003 0 00-3.18 2.12z" />
    </Svg>
  );
}

export default SvgMoonCloudyFill;
