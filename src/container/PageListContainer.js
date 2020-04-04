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

            response.json().then(pages => {
              dispatch(fetchPage(pages));
            });
          }
        }).catch(error => {
          console.log("叩けねえw",error);
        });
      },
      seatchPage(word){
        fetch(`http://localhost:3001/api/search?word=${word}`,{mode: 'cors'}).then(function(response) {
          console.log(response);
          dispatch(searchPage(response.json()));
        }).catch(error => {
          console.log("叩けねえw");
        });
      },
      addPage(page){
        dispatch(addPage(page.id,page.url));
      },
      deletePage(id){
        dispatch(deletePage(id));
      }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(PageListComponent);
