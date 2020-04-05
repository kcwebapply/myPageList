import React from 'react';


const fetchPage = (pages) => ({
  type :'FETCH_PAGE',
  payload:{
      pages
  },
});

const searchPage = (pages) => ({
  type :'SEARCH_PAGE',
  payload:{
      pages
  },
});

const addPage = (page) => ({
    type:'ADD_PAGE',
    payload:{
      page
    },
});

const deletePage = (id) => ({
  type: 'DELETE_PAGE',
  payload:{
    id
  },
})


export {
  fetchPage,searchPage,addPage,deletePage
};
