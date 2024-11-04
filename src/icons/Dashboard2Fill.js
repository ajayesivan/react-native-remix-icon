import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDashboard2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 00-5.106 11.789l.156.16 1.414-1.414a5 5 0 014.83-8.366l1.564-1.56A6.976 6.976 0 0012 5zm6.392 4.143l-1.561 1.562a5.008 5.008 0 01-1.295 4.83l1.414 1.415A6.978 6.978 0 0019 12a6.975 6.975 0 00-.608-2.857zm-2.15-2.8l-3.725 3.725A2.003 2.003 0 0010 12a2 2 0 103.932-.517l3.725-3.726-1.414-1.414z" />
    </Svg>
  );
}

export default SvgDashboard2Fill;
