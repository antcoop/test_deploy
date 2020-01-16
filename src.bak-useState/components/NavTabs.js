import React from "react";
import Tab from "./Tab";

export default function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      {Object.keys(props.pages).map(p => <Tab key={p} page={p} {...props} />)}
    </ul>
  );
}
