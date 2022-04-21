import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRewindFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 10.667l9.223-6.149a.5.5 0 01.777.416v14.132a.5.5 0 01-.777.416L12 13.333v5.733a.5.5 0 01-.777.416L.624 12.416a.5.5 0 010-.832l10.599-7.066a.5.5 0 01.777.416v5.733z" />
    </Svg>
  );
}

export default SvgRewindFill;
