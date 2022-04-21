import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGitlabFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.868 2.75L8 10h8l2.132-7.25a.4.4 0 01.765-.01l3.495 10.924a.5.5 0 01-.173.55L12 22 1.78 14.214a.5.5 0 01-.172-.55L5.103 2.74a.4.4 0 01.765.009z" />
    </Svg>
  );
}

export default SvgGitlabFill;
