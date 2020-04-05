import React from 'react';

import {deletePage} from '../actions/PageAction';
import PageComponent from '../components/PageComponent';

import {connect} from 'react-redux';





const mapDispatchToProps = (dispatch) => {
  return {
      deletePage(id){
        fetch(`http://localhost:3001/api/delete`,
          {mode: 'cors',
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          body: JSON.stringify({id:id})
        }).then(function(response) {
          dispatch(deletePage(id));
        }).catch(error => {
          console.log(error);
        });

      }
  };
}

export default connect(null,mapDispatchToProps)(PageComponent);
