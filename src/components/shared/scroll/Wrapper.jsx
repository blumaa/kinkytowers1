import * as React from "react";

const sharedStyle = {
  // display: "flex",
  minHeight: "55vh",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // textAlign: "center",
  // background: "#148bb4",
  // color: "azure",
  overflowX: "hidden",
  // overflowY: "hidden",
  // scrollbarWidth:'none',
};

const Wrapper = React.forwardRef(
  ({ style, ...props }, ref) => {
    return <div ref={ref} style={{ ...sharedStyle, ...style }} {...props} />;
  }
);

export default Wrapper;

