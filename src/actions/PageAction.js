import React from 'react';


const fetchPage = (pages) => ({
  type :'FETCH_PAGE',
  payload:{
      pages
  },
});

const addPage = (id,url) => ({
    type:'ADD_PAGE',
    payload:{
      id,
      url
    },
});

const deletePage = (id) => ({
  type: 'DELETE_PAGE',
  payload:{
    id
  },
})


export {
  fetchPage,addPage,deletePage
};
