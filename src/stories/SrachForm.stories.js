import React from "react";
import SearchForm from "../components/SearchForm/searchform";

export default {
  title: "SearchForm",
  component: SearchForm,
};

export const CustomQuery = () => (
  <SearchForm
    initialSearchQuery="Custom Search Query"
    onSearch={(query) => console.log(`Search for: ${query}`)}
  />
);
