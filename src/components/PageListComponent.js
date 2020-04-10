import React,{Component} from 'react';
import PageContainer from '../container/PageContainer';
import InputContainer from '../container/InputContainer';




export default class PageListComponent extends React.Component{

  constructor(props){
    super(props);
    this.url="";
    this.tags="";
  }

  render(){
    const {pages,fetchPage} = this.props;
    return (
      <div>
        <div className="whole">
          <InputContainer/>
          <table>
          <th><p>タイトル</p></th>
          <th><p>url</p></th>
          <th><p>タグ</p></th>
          {pages.map(function(page, i) {
            return (
              <PageContainer page={page}/>
            );
            })
          }
        </table>
        </div>
      </div>
    )


  }
}
