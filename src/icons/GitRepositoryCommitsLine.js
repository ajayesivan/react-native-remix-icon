import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGitRepositoryCommitsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18 16v-2h1V4H6v10.035c.163-.023.33-.035.5-.035H8v2H6.5a1.5 1.5 0 000 3H10v2H6.5A3.5 3.5 0 013 17.5V5a3 3 0 013-3h14a1 1 0 011 1v17a1 1 0 01-1 1h-4v-2h3v-3h-1zM7 5h2v2H7V5zm0 3h2v2H7V8zm7 9v6h-2v-6H9l4-5 4 5h-3z" />
    </Svg>
  );
}

export default SvgGitRepositoryCommitsLine;
