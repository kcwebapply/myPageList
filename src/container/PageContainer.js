import React from 'react';

import {addPage,deletePage} from '../actions/PageAction';
import PageComponent from '../components/PageComponent';

import {connect} from 'react-redux';



const mapStateToProps = (state) => {
  const {pages} = state;
  return {
    pages
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      addPage(page){
        dispatch(addPage(page.id,page.url));
      },
      deletePage(id){
        dispatch(deletePage(id));
      }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(PageComponent);
