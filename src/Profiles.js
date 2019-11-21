import React from 'react';

import './App.css';


 class Profiles extends React.Component{
  state = {
    name : "sara",
    img : "./img1.jpg",
    desc : "descrption1aaaaaaaaaaaaa",

  }

  onclick_1= () =>{
    this.setState({name:"Sara"});
    this.setState({img:"./img1.jpg"});
    this.setState({desc:"description1aaaaaaaaa"});
  }
  onclick_2= () =>{
    this.setState({name:"Horlod"});
    this.setState({img:"./img2.jpg"});
    this.setState({desc:"description2aaaaaaaaa"});
  }
  onclick_3= () =>{
    this.setState({name:"Daniel"});
    this.setState({img:"./img3.png"});
    this.setState({desc:"description3aaaaaaaaa"});
  }

  render(){
    return(
      <React.Fragment>
        <div className="container">
          <div className="buttons">
            <button onClick={this.onclick_1} value="sara">sara</button>
            <button onClick={this.onclick_2} value="horlod">horlod</button>
            <button onClick={this.onclick_3} value="Daniel">Daniel</button>
          </div>
          <div className="name">
            <h3>{this.state.name}</h3>
          </div>
          <div className="img">
            <img src ={this.state.img} alt="profile"/>
          </div>
          <div className="desc">
            {this.state.desc}
          </div>
        </div>
      </React.Fragment>
    );
  }

}

  export default Profiles;