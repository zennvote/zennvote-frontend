import React, { Component } from 'react';
import { SelectVote, SeasonVote, NarrativeVote } from '../components';

class VoteRenderer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>
                    <label>유닛 상 투표</label>
                    <SelectVote voteType="unit" />
                </div>
                <br />
                <div>
                    <label>신인 상 투표</label>
                    <SelectVote voteType="new"  />
                </div>
                <br />
                <div>
                    <label>성장 상 투표</label>
                    <SelectVote voteType="grow" />
                </div>
                <br />
                {/* <div>
                    <label>회차투표</label>
                    <SeasonVote />
                </div> */}

            </div>
        );
    }
}

export default VoteRenderer;