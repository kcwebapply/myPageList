import React from 'react';



const initialState = {
    pages:[{id:0,url:'http://example.com'}]
};

/*
pages {
  id,
  url,
  // category
}

*/

export default function PageReducer(state = initialState,action){

    switch (action.type){
        case 'FETCH_PAGE':
            return {
              ...state,
              pages:action.payload.pages
            }
        case 'ADD_PAGE':
            return {
                ...state,
                pages:state.pages.concat([action.payload])
            };

        case 'DELETE_PAGE':
            console.log("delete reducer ");
            return {
                ...state,
                pages:state.pages.filter(n => n.id !== action.payload.id)
            }
           return state;
        default:
            return state;

    }
}
