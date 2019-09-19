import React, { Component } from 'react';
import { SelectVote, EpisodeVote, NarrativeVote } from '../components';

class VoteRenderer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>
                    <label>회차투표</label>
                    <EpisodeVote />
                </div>
                <div>
                    <label>유닛 상 투표</label>
                    <SelectVote voteType="unit" />
                </div>
                <br />
                <div>
                    <label>신인 상 투표</label>
                    <SelectVote voteType="new" />
                </div>
                <br />
                <div>
                    <label>성장 상 투표</label>
                    <SelectVote voteType="grow" />
                </div>
                <br />


            </div>
        );
    }
}

export default VoteRenderer;