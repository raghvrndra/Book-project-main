import React from "react";



export default class State extends React.Component{



constructor(){
    super();
    this.State={
        name:"aishwary",
        email:"aishwary@gmai.com"
    }
}


render(){    return(<div>


<h1>hellow rohan{this.State.name}</h1>
<h1>emaail{this.state.email}</h1>


    </div>
    )
}}

