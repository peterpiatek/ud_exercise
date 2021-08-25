import React, {useState, useEffect} from 'react';

const Dropdown = ({onSelectedChange, options, selected}) => {

    const [opened, setOpened] = useState('');
    const [active, setActive] = useState('');

    useEffect(() => {
        document.body.addEventListener('click', () => {
            if(opened === 'visible'){
                onToggleMenu();
            }
        }, {capture: true}) // from react 17 use capture prop
    }, [])

    const generateOptions = () => {
        return options.map(option => {
            if(option.val === selected.val) {
                return null;
            }
            return (
                <div onClick={() => {onSelectedChange(option)}} key={option.val} className="item">{option.title}</div>
            );
        })
    }

    const onToggleMenu = (e) => {
        e.stopPropagation();
        const isMenuOpened = opened === 'visible' ? '' : 'visible';
        const isMenuActive = active === 'active' ? '' : 'active';
        setOpened(isMenuOpened);
        setActive(isMenuActive);
    }

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div className={`ui selection dropdown ${active} ${opened}`} onClick={onToggleMenu}>
                    <i className="dropdown icon"> </i>
                    <div className="text">Selected: {selected.title}</div>
                    <div className={`menu transition ${opened}`}>
                        {generateOptions()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;

/*
useEffect(() => {
    document.body.addEventListener(
        "click",
        () => {
            setOpen(false);
        },
        { capture: true }
    );
}, []);*/
