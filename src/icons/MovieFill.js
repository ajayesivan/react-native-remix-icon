import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMovieFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zm8.622 4.422a.4.4 0 00-.622.332v6.506a.4.4 0 00.622.332l4.879-3.252a.401.401 0 000-.666l-4.88-3.252z" />
    </Svg>
  );
}

export default SvgMovieFill;
