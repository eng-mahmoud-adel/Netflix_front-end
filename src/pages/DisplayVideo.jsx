import React, { Component } from 'react'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';


export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: this.props.match.params.id,
            videoData: {}
        };
    }
    async componentDidMount() {
        try {
            console.log(this.state.videoId)
            const res = await fetch(`http://localhost:8000/api/movies/${this.state.videoId}`);
            const data = await res.json();
            this.setState({ videoData: data });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div>
                <header>
                    <VideoPlayer api={`api/movies/${this.state.videoId}`} />
                </header>
            </div>
        )
    }
}