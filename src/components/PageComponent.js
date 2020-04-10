import React,{Component} from 'react';




export default class PageComponent extends React.Component{

  constructor(props){
    super(props);
    this.url= this.props;
  }

  render(){
    const {page,deletePage} = this.props;
    return (
      /*<div >
        <p style={{display:"inline"}}>{page.title}</p>
        <p style={{display: "inline"}}>{page.tags}</p>
        <input type="button" className="button" value="削除" onClick ={()=>deletePage(page.id)} />
      </div>*/
      <tr>
        <td className="td-title"><div style={{overflow:"hidden"}}><font className="font-title">{page.title}</font></div></td>
        <td className="td-url"><div style={{overflow:"hidden"}}><font className="font-url">{page.url}</font></div></td>
        <td className="td-tag"><font className="font-tag">{page.tags}</font></td>
        <td><input type="button" className="button" value="削除" onClick ={()=>deletePage(page.id)} /></td>
      </tr>
    )


  }
}
