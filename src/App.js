// import logo from './logo.svg';

// 9ed0baf342c54a6ab6d64f9ba4ffaeb8


import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  
  apiKey = '20bc0bf731b443e5947cbe58622fbf8d';

  state = {
    progress: 20,
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    this.setState({ value: event.target.value });
}

handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
}


  render() {
    return (
      <div className='bg-dark'>
        <Router>
          <h1>Jay Bhagvan </h1>
          <LoadingBar
            color='#f11946'
            height={2}
            progress={this.state.progress}
          />
          <NavBar value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          {/* <News className="my-11" country='in' pageSize={9} category='sport' style={{marginTop: "111px"}}/> */}
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" className="my-11" country='in' pageSize={9} category='general' style={{ marginTop: "111px" }} />} />

            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" className="my-11" country='in' pageSize={9} category='business' style={{ marginTop: "111px" }} />} />

            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" className="my-11" country='in' pageSize={9} category='entertainment' style={{ marginTop: "111px" }} />} />

            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" className="my-11" country='in' pageSize={9} category='health' style={{ marginTop: "111px" }} />} />

            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" className="my-11" country='in' pageSize={9} category='science' style={{ marginTop: "111px" }} />} />

            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" className="my-11" country='in' pageSize={9} category='sports' style={{ marginTop: "111px" }} />} />

            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" className="my-11" country='in' pageSize={9} category='technology' style={{ marginTop: "111px" }} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

