// Jay Bhagvan 
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import IMG from'./Suchit News App Logo.png';

export default class NavBar extends Component {

    
    // state = {
    //     value: 'false',
    //     navHeight: '11vh'
    // }

    // handleSubmit = () => {

    // }

    // setNavHeight = (clicked, navHeight) => {
    //     {this.state.clicked ? this.setState({navHeight: '58vh'}): this.setState({navHeight: '11vh'}) } 
    //     {this.state.clicked ? this.setState({clicked: 'false'}): this.setState({navHeight: 'true'}) }

    //     console.log("Done")
    // }

    render() {
        return (
            <>
                {/* <h1>Jay Bhagvan</h1> */}
                <nav className="navbar navHeight bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={
                    {
                        position: "fixed",
                        top: "0",
                        left: '0',
                        right: '0',
                        zIndex: '5',
                        // height: `${this.state.navHeight}`,
                        fontSize: '1rem'
                    }
                }>
                    <div className="container-fluid">
                        <Link className="navbar-brand fs-4" href="/"><img src={IMG} alt="logo" style={{width: '3.5rem', marginLeft: '21px'}}/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                                {/* <li className=" mx-11 nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li> */}
                                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={this.props.handleSubmit}>
                                <input className="form-control me-2" value={this.props.value} onChange={this.props.handleChange} type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>

                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}