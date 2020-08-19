import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class NewPost extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          isClickdeNewArticle: false,
          title: '',
          article: ''
        };
      this.showPasswordPage = this.showPasswordPage.bind(this);
      this.myChangeHandler = this.myChangeHandler.bind(this);
      this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }
    showPasswordPage() {
        this.setState({isClickdeNewArticle: true });
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        
        
        this.setState({[nam]: val});
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        if(this.title=="") {
            alert('Write tge title')
            this.setState({
                article: ''
            })
        }
        this.setState({isClickdeNewArticle: false})
    }
    render() {
        const passwordPage = (<form action="#">
          <div align="left" className="mainapp">
          <h2 align="right">Published</h2>
            
            <label for="title">Title</label>
            <input type='text' name="title" placeholder='Enter Title' onChange={this.myChangeHandler} required/>
            <br />
            <textarea  name="article" rows="30" cols="50" onChange={this.myChangeHandler}>
Write something about this article
</textarea>
            <div>
              <button type="submit" className="loginbutton" onClick={this.mySubmitHandler}>Publish</button>
            </div>
            
          </div>
        </form>);
      
        const mainForm = (<form action="#">
          <div align="left" className="mainapp">
            <div>
              <button type="submit" onClick={this.showPasswordPage}>New Post</button>
              <h2 padding= "40px" align="right">Published</h2>
              <h5 align="right">{this.state.title}</h5>
              <p align="right">{this.state.article}</p>
            </div>
          </div>
        </form>);
      
        return  (this.state.isClickdeNewArticle ? passwordPage : mainForm );
        }
    }
 

export default NewPost
