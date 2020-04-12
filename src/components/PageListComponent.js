import React,{Component} from 'react';
import PageContainer from '../container/PageContainer';
import InputContainer from '../container/InputContainer';




export default class PageListComponent extends React.Component{

  constructor(props){
    super(props);
    this.url="";
    this.tags="";
    const {fetchPage} = this.props;
    fetchPage();
  }

  render(){
    const {pages,fetchPage} = this.props;
    /*<table>
    <th><p>タイトル</p></th>
    <th><p>url</p></th>
    <th><p>タグ</p></th>

  </table>*/
    return (
      <div>
        <div className="whole">
          <InputContainer/>

        {pages.map(function(page, i) {
          return (
            <PageContainer page={page}/>
          );
          })
        }
        </div>
      </div>
    )


  }
}
