import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ cards }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedCards = cards.map((card, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="icon">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div className="cards" key={card.id}>
        <div className="label" onClick={() => handleClick(index)}>
          {card.label}
          {icon}
        </div>
        <div className="content">{isExpanded && <div>{card.content}</div>}</div>
      </div>
    );
  });

  return <div>{renderedCards}</div>;
}

export default Accordion;
