import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNotification2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1v2zM5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm4.5 3h5a2.5 2.5 0 11-5 0z" />
    </Svg>
  );
}

export default SvgNotification2Line;
