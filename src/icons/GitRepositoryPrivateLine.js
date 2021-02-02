import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGitRepositoryPrivateLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6 10v10h13V10H6zm12-2h2a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h2V7a6 6 0 1112 0v1zm-2 0V7a4 4 0 10-8 0v1h8zm-9 3h2v2H7v-2zm0 3h2v2H7v-2zm0 3h2v2H7v-2z" />
    </Svg>
  );
}

export default SvgGitRepositoryPrivateLine;
