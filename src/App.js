import React, {useState} from "react";
import Accordion from "./component/Accordion";
import Search from "./component/Search";
import Dropdown from "./component/Dropdown";
import Translate from "./component/Translate";
import Route from "./component/Route";

const items = [
  {
    title: "What is Rreact?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use Rreact?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use Rreact?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Shade of Blue",
    value: "blue",
  },
];

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a Color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};
