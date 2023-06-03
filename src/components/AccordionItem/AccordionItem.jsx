import './AccordionItem.scss';

import { useRef } from 'react';
import { images } from '../../constants';

const AccordionItem = ({ accordionItemData, active, handleToggle }) => {

    const contentEl = useRef(null);
    const { id, title, text } = accordionItemData;

    return (
        <div className="accordion-item">
            <div className="accordion-item__content">
                <header 
                    className={`accordion-item__header ${active === id ? 'accordion-item__header--active' : ''}`}
                    onClick={() => handleToggle(id)}
                >
                    <h3 className="accordion-item__title">{title}</h3>
                    <img src={active === id ? images.minus : images.plus} className="accordion-item__icon" />
                </header>
                <div
                    ref={contentEl}
                    className={`accordion-item__data ${active === id ? "accordion-item__data--show" : ""}`}
                    style={
                        active === id
                        ? { height: contentEl?.current?.scrollHeight }
                        : { height: "0px" }
                    }
                >
                    <p className="accordion-item__data-text">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;