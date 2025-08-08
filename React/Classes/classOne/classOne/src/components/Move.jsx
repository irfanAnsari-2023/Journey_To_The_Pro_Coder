const Move = ()=>{

    const moveHandler = ()=>{
        alert("Mouse is move here");
    }
    return <div>
        <p onMouseMove={moveHandler}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, amet. </p>
    </div>
}

export default Move;