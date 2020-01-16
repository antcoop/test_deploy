import React, { useState } from "react";
import Tabs from "../components/NavTabs";
import pages from "../components/pages";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = page => setCurrentPage(page);
  const data = {currentPage, handlePageChange, pages};
  const Element = pages[currentPage];
  return [<Tabs key="0" {...data} />, <Element key="1" />];
}
