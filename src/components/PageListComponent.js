import React,{Component} from 'react';
import PageContainer from '../container/PageContainer';




export default class PageListComponent extends React.Component{

  constructor(props){
    super(props);
    this.url="";
  }

  render(){
    const {pages,fetchPage,searchPage,addPage,deletePage} = this.props;
    console.log(pages);
    return (
      <div>
        <ul>{pages.map(function(page, i) {
          return (
            <PageContainer page={page}/>
          );
          })
        }
        </ul>
        <input type="button" value="add" onClick ={()=>addPage({id:2,url:this.url})} />
        <input type="button" value="search" onClick ={()=>fetchPage()} />
        <input type="text"  onChange={(e) => {
          this.url=e.target.value;
        }}/>
        </div>
    )


  }
}
