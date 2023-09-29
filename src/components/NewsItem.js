// Jay Bhagvan
import React, { Component } from "react";
// import {styled} from 'style-components'
// import './App.css';
import "./style.css";

export default class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, url, publishedAt, author } = this.props;

        return (
            <>
                {/* <myComp> */}
                {/* Jay Bhagvan - NewsItem */}
                {/* <div className=" Hover card text-bg-dark WIDTH" style={{}}>
                    <img
                        src={imgUrl}
                        className="img card-img"
                        alt="..."
                        style={{ opacity: "0.5" }}
                    />
                    <div className="card-img-overlay" style={{ color: "#adb5bd" }}>
                        <h5
                            className="card-title"
                            style={{ color: "#cbcbcb", padding: "0px 21px 31px 21px" }}
                        >
                            {title}
                        </h5>
                        <p className="card-text">{description}</p>
                        <a
                            href={url}
                            className="btn btn-dark"
                            target="__black"
                            style={{
                                position: "absolute",
                                top: "80%",
                                right: "2%",
                                opacity: "0.7",
                            }}
                        >
                            Read More
                        </a> */}
                {/* <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                </div>
 */}

                <div className="card H m-3 bg-secondary" data-bs-theme="light">
                    <div className="d-flex justify-content-end" style={{
                        position: "absolute",
                        left: "-5%",
                        top: "-2%"
                    }}>
                        <span class="badge text-bg-light">{author}</span>
                    </div>
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description} ...</p>
                        <p className="card-text" style={{fontSize: "0.8rem", color: "black"}}>{new Date(publishedAt).toGMTString()}</p>
                        <div className="d-flex justify-content-end">
                        <a href="#" className="btn btn-dark" style={{ opacity: '0.7'}}>Read More</a>
                        </div>
                    </div>
                </div>
                {/* </myComp> */}
                {/* <myDiv>Jay Bhagvan</myDiv> */}
            </>
        );
    }
}

// const myDiv = styled.div`
// height:  101px,
// width: 101px,
// background-color: black
// `
