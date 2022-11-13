import React, {useState} from 'react';

const HelloWorld = () => {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);

    const toggle = () => value === 'hello' && setVisible(prevState => !prevState);
    const onChange = (e) => setValue(e.target.value);

    return (
        <div>
            <input id="search" type="text" onChange={onChange}/>
            <button id="toggle" onClick={toggle}>HELLO WORLD</button>
            {visible && <h1 id="hello">HELLO WORLD</h1>}
        </div>
    );
};

export default HelloWorld;