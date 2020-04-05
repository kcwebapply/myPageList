import React from 'react';

import {fetchPage,searchPage,addPage,deletePage} from '../actions/PageAction';
import PageListComponent from '../components/PageListComponent';

import {connect} from 'react-redux';



const mapStateToProps = (state) => {
  const {pages} = state;
  return {
    pages
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      fetchPage(){
        fetch(`http://localhost:3001/api/fetch`, {mode: 'cors'}).then(function(response) {
          if(response.ok){
            console.log("dispatch!");
            response.json().then(pages => {
              dispatch(fetchPage(pages));
            });
          }
        }).catch(error => {
          console.log(error);
        });
      },
      seatchPage(word){
        fetch(`http://localhost:3001/api/search?word=${word}`,{mode: 'cors'}).then(function(response) {
          dispatch(searchPage(response.json()));
        }).catch(error => {
          console.log(error);
        });
      },
      addPage(page){
        fetch(`http://localhost:3001/api/add`,{
          mode: 'cors',
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          body: JSON.stringify({url:page.url,tags:page.tags})
        }).then(function(response) {
          return fetch(`http://localhost:3001/api/fetch`, {mode: 'cors'});
        }).then(function(response){
          if(response.ok){
            response.json().then(pages => {
              dispatch(fetchPage(pages));
            });
          }
        }).catch(error => {
          console.log(error);
        });

      }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(PageListComponent);
