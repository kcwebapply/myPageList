import React,{Component} from 'react';




export default class PageComponent extends React.Component{

  constructor(props){
    super(props);
    this.url="";
  }

  render(){
    const {pages,addPage,deletePage} = this.props;
    return (
      <div>
        <ul>{pages.map(function(page, i) {
          console.log(page,i);
          return (
            //<li key={i}>{page.url}</li>
            <iframe width="400" height="300" src={page.url}/>
          );
          })
        }
        </ul>
        <input type="button" value="add" onClick ={()=>addPage({id:2,url:this.url})} />
        <input type="text"  onChange={(e) => {
          console.log(e.target.value);
          this.url=e.target.value;
        }}/>
        </div>
    )


  }
}
