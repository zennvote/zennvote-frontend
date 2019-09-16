import React, { Component } from 'react';
import { Checkbox, Button } from 'antd';
import axios from 'axios';
import VoteContainer from '../containers/VoteContainer';

const CheckboxGroup = Checkbox.Group;

class SelectVote extends Component {
    
    state = {
        
        indeterminate: true,
        checked: true,
        disabled: false,
        checkedList: [],
        votelist:[],
    };

    componentDidMount() {
        this.fetchVoteData();
    }

    fetchVoteData = async () => {
        const voteType  = this.props.voteType;
        const { votelist } = this.state;
        this.setState({
            fetching: true
        });

        try {
            const choices = await axios.get(`http://ec2-3-15-42-212.us-east-2.compute.amazonaws.com:3000/api/choices/${voteType}`);
        
            // let findCorrectVoteData = votelist;
            // let correctVoteData = {
            //     ...findCorrectVoteData,
            //     votelist: choices
            // }

            this.setState({
                votelist: choices,
                fetching: false
            });
            //console.log(this.state.votelist);
        } catch (e) {
            console.log(e);
            this.setState({
                fetching: false
            });
        }
    }

    toggleDisable = () => {
        this.setState({ disabled: true });
    };

    onChange = checkedList => {
        const { votelist } = this.state;
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < votelist.length,
        });
        console.log(checkedList);

    };

    render() {
        const { votelist, checkedList } = this.state;
        const voteType  = this.props.voteType;
        return (
            <div>
                <br />
                <CheckboxGroup
                    options={votelist.data}
                    value={this.state.checkedList}
                    onChange={this.onChange}
                    disabled={this.state.disabled}
                />
                <br />
                <p>
                    <br />
                    <Button
                        style={{ marginLeft: '10px' }}
                        type="primary"
                        size="small"
                        onClick={this.toggleDisable}
                    >
                        {!this.state.disabled ? '투표하기' : '투표완료'}
                        <VoteContainer voteType={voteType} checkedList={checkedList} />
                    </Button>
                    <br />
                </p>

                <div style={{ borderBottom: '1px solid #E9E9E9' }} />
            </div>
        );
    }
}

export default SelectVote;