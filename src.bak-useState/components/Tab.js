import React from "react";

export default function Tab(props) {
  return(
    <li className="nav-item">
      <a
        href={`#${props.page.toLowerCase()}`}
        onClick={() => props.handlePageChange(props.page)}
        className={props.currentPage === props.page ? "nav-link active" : "nav-link"}
      >
        {props.page}
      </a>
    </li>
  );
}
