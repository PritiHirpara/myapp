import { createStore } from "redux";

const count = 100;

const reducer = (state=count,action)=>{


    if(action.type=="ADD")
    {
       return state +action.playload;
    }
    else if(action.type=="MINUS")
    {
       return state - 1;
    }
    else
    {
       return state;
    }

};


const mystore = createStore(reducer);

export default mystore;