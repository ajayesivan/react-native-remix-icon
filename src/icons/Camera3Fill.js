import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCamera3Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 012 20V6zm12 12a5 5 0 100-10 5 5 0 000 10zM4 7v2h3V7H4zm0-5h6v2H4V2z" />
    </Svg>
  );
}

export default SvgCamera3Fill;
