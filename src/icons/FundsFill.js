import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFundsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.901 17.864l3.911-3.911 2.829 2.828 4.571-4.571 1.793 1.793v-5h-5l1.793 1.793-3.157 3.157-2.829-2.829-4.945 4.946a9.965 9.965 0 01-.862-4.067c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10a9.987 9.987 0 01-8.104-4.14z" />
    </Svg>
  );
}

export default SvgFundsFill;
