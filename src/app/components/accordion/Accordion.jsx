import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = () => {
  return (
    <div className="container bg-lime-100 pl-2 pr-2">
      <p className="titleFont">Popular Question :</p>
      <ul className="p-6">
        <AccordionItem />
      </ul>
    </div>
  );
};

export default Accordion;
