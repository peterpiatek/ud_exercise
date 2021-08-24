import React,{useState} from 'react';

const Accordion = ({items}) => {

    const [accordionCurrentItem, setAccordionCurrentItem] = useState('null');

    const onAccordionTitleClick = (index) => {
        setAccordionCurrentItem(index);
    }

    const generateItems = () => {

        return items.map((item, index) => {
            const activeCssClass = index === accordionCurrentItem ? 'active' : '';
            return (
                <React.Fragment key={item.title} >
                    <div className={`title ${activeCssClass}`} onClick={onAccordionTitleClick}>
                        <i className="dropdown icon"> </i>
                        {item.title}
                    </div>
                    <div className={`content ${activeCssClass}`}>
                        <p>{item.description}</p>
                    </div>
                </React.Fragment>
            )
        })
    }

    return (
        <div>
            <div className="ui styled accordion">
                {generateItems()}
            </div>
        </div>
    );
};

export default Accordion;