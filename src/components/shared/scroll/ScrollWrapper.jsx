import * as React from "react";
import Status from "./Status";

const defaultStyle = {
  height: "101vh",
  // textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  // backgroundColor: "#2d1176",
  color: "#fff"
};
const defaultStyleBottom = {
  height: "101vh",
  // textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  // backgroundColor: "#2d1176",
  color: "#fff"
};

/**
 * ScrollWrapper directs the user to scroll the page to reveal it's children.
 * Use this on Modules that have scroll and/or observer triggers.
 */
const ScrollWrapper = ({ children, style, inView, ...props }) => {
  return (
    <div {...props} className='ScrollWrapper'>
      <Status inView={inView} />
      <section style={{ ...defaultStyle, ...style }}>
        <h1>⬇ Welcome! ⬇</h1>
      </section>
      {children}
      <section style={{ ...defaultStyleBottom, ...style }}>
        <h1>⬆︎ Scroll up ⬆︎</h1>
      </section>
    </div>
  );
};

export default ScrollWrapper;

