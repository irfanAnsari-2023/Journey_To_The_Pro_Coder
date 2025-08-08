const Copy =()=>{

    function copy(){
        alert("stop copying our content 🤬🤬🤬")
    }
    return <div>
        <p onCopy={copy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In praesentium esse fugit soluta cupiditate natus! Sunt eos cum fuga rem!</p>
    </div>
}
export default Copy;