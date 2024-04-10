import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGitRepositoryLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 013 17.5V5a3 3 0 013-3h14a1 1 0 011 1v17a1 1 0 01-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 000 3H7v-2h6v2zm6-5V4H6v10.035c.163-.023.33-.035.5-.035H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z" />
    </Svg>
  );
}

export default SvgGitRepositoryLine;
