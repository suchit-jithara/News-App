// Jay Bhagvan 
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import IMG from './images.jpg';
import Loading from './loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import './style.css';

export default class News extends Component {

    

    static defaultProps = {
        country: 'us',
        pageSize: 6,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    };

    constructor() {
        super()
        console.log("Jay Bhagvan 1");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResult: 0
        }
    }

    async componentDidMount() {
        this.props.setProgress(0);
        console.log("cmd");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&category=${this.props.category}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(30);

        try {
            this.setState({ loading: true })
            let data = await fetch(url);
            console.log(typeof data)
            let parsedData = await data.json()
            this.props.setProgress(70);
            console.log(typeof parsedData)
            console.log(parsedData);
            this.setState({ articles: parsedData.articles, loading: false })
            this.props.setProgress(100);
        }
        catch {
            console.log("err");
        }
    }

    nextPage = async () => {
        this.props.setProgress(0);
        console.log("cmd");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&category=${this.props.category}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(30);
        try {
            this.setState({ loading: true })
            let data = await fetch(url);
            console.log(typeof data)
            let parsedData = await data.json()
            this.props.setProgress(70);
            console.log(typeof parsedData)
            console.log(parsedData);
            this.setState({ articles: parsedData.articles, loading: false, totalResult: parsedData.totalResult })
            this.props.setProgress(100);
        }
        catch {
            console.log("err");
        }
        this.setState({
            page: ++this.state.page,
        })
        console.log(this.state.page);
    }

    previusPage = async () => {
        this.props.setProgress(0);
        console.log("cmd");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&category=${this.props.category}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(30);
        try {
            this.setState({ loading: true })
            let data = await fetch(url);
            console.log(typeof data)
            let parsedData = await data.json()
            this.props.setProgress(70);
            console.log(typeof parsedData)
            console.log(parsedData);
            this.setState({ articles: parsedData.articles, loading: false, totalResult: parsedData.totalResult })
            this.props.setProgress(100);

        }
        catch {
            console.log("err");
        }
        this.setState({
            page: --this.state.page,
        })
        console.log(this.state.page);
    }

    fetchMoreData = async () => {
        this.props.setProgress(0);
        console.log("cmd");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&category=${this.props.category}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(30);
        try {
            this.setState({ loading: true })
            let data = await fetch(url);
            console.log(typeof data)
            let parsedData = await data.json()
            this.props.setProgress(70);
            console.log(typeof parsedData)
            console.log(parsedData);
            this.setState({ articles: this.state.articles.concat(parsedData.articles), loading: false, totalResult: parsedData.totalResult })
            this.props.setProgress(100);
        }
        catch {
            console.log("err");
        }
        this.setState({
            page: ++this.state.page,
        })
    }
    render() {
        console.log("Render")
        return (
            <div className='bg-dark' style={{ margin: '9vh 15px' }}>
                {/* Jay Bhagvan - News */}
                {/* <NewsItem title="Jay Bhagvan" discription="Jay Bhagvan"/>
                <NewsItem/>
            <NewsItem/> */}

                <div className="container my-3 p-3 d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-light fs-6" onClick={this.previusPage}>&#8249; Previus</button>
                    <h2 className="text-center" style={{ color: 'white' }} >Top {this.props.category} News - Jay Bhagvan </h2>
                    <button type="button" className="btn btn-light fs-6" onClick={this.nextPage}>Next &#8250;</button>
                </div>

                {this.state.loading && <Loading className="text-center" />}


                {/* {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : IMG} url={element.url} />
                        </div>
                    })} */}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResult}
                    loader={<Loading className="text-center" />}
                    scrollableTarget="scrollableDiv"
                >
                    <div className="container d-flex align-center justify-contetnt-center flex-wrap">
                        <div className="row FLEX">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? (element.description).slice(0, 101) : ""} imgUrl={element.urlToImage ? element.urlToImage : IMG} url={element.url} publishedAt={element.publishedAt} author={element.author ? element.author : "Unknown"}/>
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </div>
        )
    }
}