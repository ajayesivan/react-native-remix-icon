import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDropboxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.65 17.26l3.392 2.162 3.392-2.161 1.86 1.185-5.252 3.346-5.252-3.346 1.86-1.185zm-.876-8.28l2.393-1.553L7.74 5.854 5.286 7.37l2.488 1.61zm1.84 1.19l2.39 1.548 2.391-1.547-2.39-1.552-2.392 1.552zm4.231 2.74l2.424 1.568 2.45-1.502-2.486-1.612-2.388 1.545zm-1.84-6.675l4.236-2.748 6.225 3.843-4.393 2.843 4.394 2.851-6.227 3.818-4.235-2.741-4.236 2.74-6.229-3.817 4.395-2.851L1.543 7.33l6.225-3.843 4.236 2.748zm1.836 1.192l2.394 1.553 2.488-1.61-2.455-1.517-2.427 1.574zm-3.677 5.482l-2.39-1.546-2.485 1.613 2.451 1.502 2.424-1.569z" />
    </Svg>
  );
}

export default SvgDropboxLine;
