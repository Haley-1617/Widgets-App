import React, {useState} from "react";

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClicked = (index) => {
    setActiveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        {/* Why we need arrow function here? (onClick={() => ...}) */}
        {/* We don't want to call it when item is rendered, we want to call it some point in the future */}
        {/* To achieve that, we need to wrap them in an arrow function */}
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className='ui styled accordion'>{renderedItems}</div>;
};

export default Accordion;
