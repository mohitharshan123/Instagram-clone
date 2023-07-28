import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Save: React.FC<any> = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M3.9 21.078V1.9h16.2v19.178l-7.524-6.27a.9.9 0 0 0-1.152 0L3.9 21.079Z"
    />
  </Svg>
);
export default Save;
