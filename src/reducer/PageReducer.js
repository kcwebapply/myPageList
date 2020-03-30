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
              pages:action.payload
            }
        case 'ADD_PAGE':
            return {
                ...state,
                pages:state.pages.concat([action.payload])
            };

        case 'DELETE_PAGE':
            state.pages.some(function(v,i){
                if (v.id==action.id){
                    return {
                        ...state,
                        pages:state.pages.splice(i,1)
                    }
                }
            });
           return state;
        default:
            return state;

    }
}
