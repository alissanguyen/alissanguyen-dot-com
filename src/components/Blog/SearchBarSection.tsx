import * as React from "react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

/*
* TODO: Enable Subscribing to newsletter
*/

interface Props {
  search: string;
  setSearch: (input: string) => void;
  email: string;
  setEmail: (input: string) => void;
  count: number;
}

const SearchBarSection: React.FC<Props> = (props) => {


  return (
    <div className="BlogPage__Header__Wrapper">
      <div className="">
        <p className="BlogPage__SubHeader Slogan mb-3 xs:mb-5 gradient-text">
          Find resources for <br className="hidden xs:flex"></br>web development and more.
        </p>
        <p className="text-subText opacity-75 text-lg xs:text-xl md:text-2xl mb-8">Tag along with me as I explore new tech and share my learning along the way!</p>
        <div className="SearchBar__InputWrapper">
          <input
            type="text"
            name="Search blog posts"
            id="blog-post-search-bar"
            value={props.search}
            onChange={(e) => {
              props.setSearch(e.target.value);
            }}
            className="SearchBar__Input"
            placeholder="Search posts"
          />
          <div className="SearchBar__Icon">
            <span className="mr-2">
              <DocumentTextIcon className="h-5 w-5" />
            </span>
            <p className="text-sm opacity-80">{props.count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarSection;
