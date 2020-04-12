import React,{Component} from 'react';
import {connect} from 'react-redux';

export default class InputComponent extends React.Component{


  constructor(props){
    super(props);
    this.url = "";
    this.tags = "";
    this.type = "word";
    this.keyword = "";
  }

  render(){
    const {addPage,searchPage} = this.props;
    return (
    <div className="input-area">
    <div className="input-div input-add-page">
      <div className="input-part">
        <label className="input-title">url</label>
        <input type="text" className="input-text"  placeholder="URLを入力する" onChange={(e) => {
          this.url=e.target.value;
        }}/>
      </div>

      <div className="input-part">
        <label className="input-title">タグ</label>
        <input  type="text" className="input-text" placeholder="タグを入力する"  onChange={(e) => {
          this.tags=e.target.value;
        }}/>
      </div>
      <input type="button" value="登録" className="button input-button"　style={{align:"right"}} onClick ={()=>addPage({url:this.url,tags:this.tags})}/>
    </div>

    <div className="input-div input-search">
      <div style={{width:"69%",float:"left"}}>
        <label className="input-title">html検索</label>
        <div className="search_bar">
          <input className="input-text" type="text" placeholder="キーワードを入力"  onChange={(e) => {
            this.keyword=e.target.value;
          }}/>
        </div>
      </div>
      <div class="select-wrap select-primary" style={{marginTop:"10px",width:"100px",float:"left"}}>
          <select   onChange={(e)=>{this.type=e.target.value;}}>
           <option selected value="word">html</option>
           <option value="tag">tag</option>
         </select>
       </div>
      <input type="button" value="検索" className = "button input-button"  style={{float:"left", marginLeft:"29px"}} onClick ={()=>searchPage(this.type,this.keyword)} />

    </div>
  </div>);
  }

}
