import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({onSelectedChange, options, selected, formTitle}) => {
    const [opened, setOpened] = useState('');

    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (e) => {
            if (!ref.current.contains(e.target)) {
                setOpened(false);
            }
        }
        document.body.addEventListener('click', onBodyClick, {capture: true});

        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true});
        }
    }, []);

    const generateOptions = () => {
        return options.map(option => {
            if (option.val === selected.val) {
                return null;
            }
            return (
                <div onClick={() => {
                    // console.log('item click');
                    onSelectedChange(option)
                }} key={option.val} className="item">{option.title}</div>
            );
        })
    }

    const onToggleMenu = () => {
        setOpened(!opened);

    };

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{formTitle}</label>
                <div className={`ui selection dropdown ${opened === true ? 'visible active' : ''}`}
                     onClick={onToggleMenu}>
                    <i className="dropdown icon"> </i>
                    <div className="text">Selected: {selected.title}</div>
                    <div className={`menu ${opened === true ? 'visible transition' : ''}`}>
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


/*
useEffect(() => {
    const onBodyClick = (event) => {
        if (ref.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
        document.body.removeEventListener("click", onBodyClick, {
            capture: true,
        });
    };
}, []);*/
