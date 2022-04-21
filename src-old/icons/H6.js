import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgH6(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21.097 8l-2.598 4.5a4 4 0 11-3.453 1.981L18.788 8h2.309zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 10.5a2 2 0 10-.001 3.999A2 2 0 0018.5 14.5z" />
    </Svg>
  );
}

export default SvgH6;
