import React from 'react'
import { render } from 'react-dom'
import AppTitle from './MyApp'

var handler=()=>{
    console.log("This text comes from arrow function outside of the class")//class dışında olduğundan çalışmadı
}
class main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            a:0,
            b:0
        }
        this.aFieldValueChangeHandler=this.aFieldValueChangeHandler.bind(this); //returning a new instance
        this.bFieldValueChangeHandler=this.bFieldValueChangeHandler.bind(this); 
    }
    aFieldValueChangeHandler(ev){
        console.log("Value changed a:"+ev.target.value);
           this.setState({
            a:ev.target.value
        });
        /*console.log(this.state.a)*/
    }
    bFieldValueChangeHandler(ev){
        console.log("Value changed b:"+ev.target.value);
           this.setState({
            b:ev.target.value
        });
    }

render(){
    <h1>hi</h1>
    return (
        <>
         <input type="number" onChange={this.aFieldValueChangeHandler()}/>
        {(this.state.a>5) && <b>The value of the field a is greater than 5 </b>}
        </> //lab example
        <form>
            <input type="number" name="a" value={this.state.a} onChange={this.aFieldValueChangeHandler} />
        </form>
         <form>
         <input type="number" name="b" value={this.state.b} onChange={this.bFieldValueChangeHandler} />
     </form>
        
        );
    }
}

export default main
