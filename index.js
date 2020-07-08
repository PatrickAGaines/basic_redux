import { createStore } from "https://unpkg.com/redux@4.0.5/es/redux.mjs";


// Initial State is Set
const initialState = {
    buttonClicked: "no",
    divVisible: "no"
};

function rootReducer(state = initialState, action){
    switch(action.type) {
        case "BUTTON_CLICKED":
            return {...state, buttonClicked: "yes"};
            // return Object.assign({}, state, {buttonClicked: "yes"}) *Alternate Syntax* 
        case "DIV_VISIBLE":
            return {...state, divVisible: "yes"};
            // return Object.assign({}, state, {divVisible: "yes"}) *Alternate Syntax*
        default:
            return state
    }
}

const store = createStore(rootReducer);

const button = document.getElementById("my-button")
button.addEventListener("click", function(){
    const buttonClickedAction = {
        type: "BUTTON_CLICKED"
    }
    const divVisibleAction = {
        type: "DIV_VISIBLE"
    }
    store.dispatch(buttonClickedAction);
    store.dispatch(divVisibleAction);
});

store.subscribe(function(){
    if(store.getState().divVisible === "yes"){
        const div = document.getElementById("my-div");
        div.style.display = "block";
    }
});

