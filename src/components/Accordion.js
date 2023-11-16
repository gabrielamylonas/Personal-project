import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ sections }) {
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

  const renderedSections = sections.map((section, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="icon">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div className="section" key={section.id}>
        <div className="label" onClick={() => handleClick(index)}>
          {section.label}
          {icon}
        </div>
        <div className="content">
          {isExpanded && <div>{section.content}</div>}
        </div>
      </div>
    );
  });

  return <div>{renderedSections}</div>;
}

export default Accordion;
