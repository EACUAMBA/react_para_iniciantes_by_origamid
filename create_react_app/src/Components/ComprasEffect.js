import React, {useState, useEffect} from 'react';


function ComprasEffect(props) {

    const [getTitle, setTitle] = useState("React");
    const [count, setCount] = useState(1);

    useEffect(()=>{
        document.title = getTitle;
    }, [getTitle]);

    function handleChange(event){
        console.log(event.target.value)
        setTitle(event.target.value);
    }
    function handleChangeCount(event){
        console.log(event.target.value)
        setCount(event.target.value);
    }

    return (
        <div>
            <input type={'text'} name={'title'} onChange={handleChange}/>
            <input type={'number'} name={'count'} onChange={handleChangeCount}/>
        </div>
    );
}


export default ComprasEffect;