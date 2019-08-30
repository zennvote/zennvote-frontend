import React, { Component } from 'react';
import {VoteDataContainer} from '../containers';

class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <VoteDataContainer/>
        );
    }
}

export default Vote;