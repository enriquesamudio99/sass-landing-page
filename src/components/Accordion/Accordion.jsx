import './Accordion.scss';

import { useState } from 'react';
import { data } from '../../constants';

import { AccordionItem } from '../';

const Accordion = () => {

    const { accordionItemsData } = data;
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    };

    return (
        <div className="accordion">
            <div className="accordion__grid">
                {accordionItemsData.map((accordionItemData) => (
                    <AccordionItem 
                        key={accordionItemData.id}
                        accordionItemData={accordionItemData}
                        active={active}
                        handleToggle={handleToggle}
                    />
                ))}
            </div>
        </div>
    );
};

export default Accordion;