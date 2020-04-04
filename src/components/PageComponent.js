import React,{Component} from 'react';




export default class PageComponent extends React.Component{

  constructor(props){
    super(props);
    this.url= this.props;
  }

  render(){
    const {page,deletePage} = this.props;
    return (
      <div style={{backgroundColor:"#9999FF"}}>
        <p>{page.title}</p>
        <p>{page.tags}</p>
        <input type="button" value="delete" onClick ={()=>deletePage(page.id)} />
      </div>
    )


  }
}
