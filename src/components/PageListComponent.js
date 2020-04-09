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
        <div className="whole">
        <div className="input-div">
          <div className="input-part">
            <label className="input-title">url</label>
            <input type="text" className="input-text"  placeholder="URLを入力する" onChange={(e) => {
              this.url=e.target.value;
            }}/>
            <div className="text_underline"></div>
          </div>

          <div className="input-part">
            <label className="input-title">タグ</label>
            <input  type="text" className="input-text" placeholder="タグを入力する"  onChange={(e) => {
              this.tags=e.target.value;
            }}/>
            <div className="text_underline"></div>
          </div>
          <input type="button" value="登録" className="button input-button"　style={{align:"right"}} onClick ={()=>addPage({url:this.url,tags:this.tags})}/>
        </div>


        <div className="input-div">
          <div style={{width:"80%",float:"left"}}>
            <label className="input-title">html検索</label>
            <div className="search_bar">
              <input className="input-text" type="text" placeholder="キーワードを入力"/>
            </div>
            <div className="text_underline"></div>
          </div>
          <input type="button" value="search" className = "button input-button"  style={{align:"right", marginLeft:"29px"}} onClick ={()=>fetchPage()} />
        </div>

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
