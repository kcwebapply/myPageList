import React from 'react';

import {deletePage} from '../actions/PageAction';
import PageComponent from '../components/PageComponent';

import {connect} from 'react-redux';





const mapDispatchToProps = (dispatch) => {
  return {
      /*fetchPage(){
        fetch(`http://localhost:3001/api/fetch`, {mode: 'cors'}).then(function(response) {
          if(response.ok){

            response.json().then(pages => {
              console.log("呼ばれた");
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
      },*/
      deletePage(id){
        //method: "POST",
        fetch(`http://localhost:3001/api/delete`,
          {mode: 'cors',
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          body: JSON.stringify({id:id})
        }).then(function(response) {
          console.log(response);
          console.log("削除！",id);
          dispatch(deletePage(id));
        }).catch(error => {
          console.log("叩けねえw");
        });

      }
  };
}

export default connect(null,mapDispatchToProps)(PageComponent);
