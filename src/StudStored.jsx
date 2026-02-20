import { createStore } from "redux";

// const total = 0;

var initialstate = {
    "total":0,
    "per":0.0
}

const reducer = (state=initialstate,action)=>{

    if(action.type=="GETTOTAL")
    {
        let s1 = action.payload.sub1;
        let s2 = action.payload.sub2;
        let s3 = action.payload.sub3;
        let t = parseInt(s1) + parseInt(s2) + parseInt(s3);
        return {
            ...state,
            "total":t
        }
        // state = t;
        // return state;
        // alert(t)
        // return t;
        // alert(s1); 
    }
    else if(action.type=="GETPER")
    {
        let s1 = action.payload.sub1;
        let s2 = action.payload.sub2;
        let s3 = action.payload.sub3;
        let t = parseInt(s1) + parseInt(s2) + parseInt(s3);
        let per = t/3;
        return {
            ...state,
            "per":per
        }
        // state = t;
        // return state;
        // alert(t)
        // return t;
        // alert(s1); 
    }
    else
    {
        return state;
    }
  
};


const StudStored = createStore(reducer);

export default StudStored;