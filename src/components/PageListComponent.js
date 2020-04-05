import React,{Component} from 'react';
import PageContainer from '../container/PageContainer';




export default class PageListComponent extends React.Component{

  constructor(props){
    super(props);
    this.url="";
    this.tags="";
  }

  render(){
    const {pages,fetchPage,searchPage,addPage,deletePage} = this.props;
    return (
      <div>
        <ul>{pages.map(function(page, i) {
          return (
            <PageContainer page={page}/>
          );
          })
        }
        </ul>
        <input type="button" value="add" onClick ={()=>addPage({url:this.url,tags:this.tags})} />
        <input type="button" value="search" onClick ={()=>fetchPage()} />
        <input type="text"  onChange={(e) => {
          this.url=e.target.value;
        }}/>
        <input type="text"  onChange={(e) => {
          this.tags=e.target.value;
        }}/>
        </div>
    )


  }
}
