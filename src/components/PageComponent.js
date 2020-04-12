import React,{Component} from 'react';
import cancel from '../images/cancel.png';



export default class PageComponent extends React.Component{

  constructor(props){
    super(props);
    this.url= this.props;
  }

  render(){
    const {page,deletePage} = this.props;
    const tags = page.tags?page.tags.split(","):[];
    return (
      <div class="box10">
        <input type="image"  src = {cancel} style={{float:"right",width:"10px"}} onClick ={()=>deletePage(page.id)}/>
        <div className="page-title">{page.title}</div>

        <div className="page-url"><a href={page.url} style={{overflow:"hidden",position:"relative"}} target="_blank"><font className="font-url">{page.url}</font></a></div>
        <div className="font-tag">
        {tags.map(function(tag, i) {
          return (
          <a href="#" className="tag" >{tag}</a>
          );
          })
        }
        </div>

      </div>
    )


  }
}
