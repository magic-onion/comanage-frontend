import React, {Component} from 'react';
import vid from './assets/Slowmotion_Skateboard_turn_on_a_transition.mp4'

class Bgvid extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: './assets/Slowmotion_Skateboard_turn_on_a_transition.mp4'
        }
    }

    render () {
        return (
            <video className="background-video" loop autoPlay>
                <source src={vid} type="video/mp4" />
            </video>
        )
    }
};

export default Bgvid;
