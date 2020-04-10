import React from 'react';

import {addPage,searchPage,fetchPage} from '../actions/PageAction';
import InputComponent from '../components/InputComponent';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
      searchPage(word){
        fetch(`http://localhost:3001/api/search?word=${word}`,{mode: 'cors'}).then(function(response) {
          if(response.ok){
            response.json().then(pages => {
              dispatch(fetchPage(pages));
            });
          }
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

export default connect(null,mapDispatchToProps)(InputComponent);
