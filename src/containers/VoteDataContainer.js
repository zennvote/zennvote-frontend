import React, { Component } from 'react';
import * as service from '../services/GetVoteData';
import { VoteDataWrapper, Vote } from '../components';

class VoteDataContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: [
                "김가나",
                "엑솔루트"
            ],
            fetching: false,
        };
    }

    // componentDidMount() {
    //     this.fetchVoteData();
    // }

    fetchVoteData = async () => {
        this.setState({
            fetching: true
        });

        try {
            const voteData = await Promise.all([
                service.getVoteData()
            ]);

            const choices = voteData.data;
            this.setState({
                choices,
                fetching: false
            });
        } catch (e) {
            this.setState({
                fetching: false
            });
        }
    }

    render() {
        const { choices } = this.state;
        return (
            <VoteDataWrapper>
                <Vote choices={choices} />
                <Vote choices={choices} />
                <Vote choices={choices} />
                <Vote choices={choices} />
            </VoteDataWrapper>
        );
    }
}

export default VoteDataContainer;