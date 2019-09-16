import React, { Component } from 'react';
import Axios from 'axios';

class VoteData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voteData: {
                email: "",
                password: "",
                data: {
                    problem: [], //문제 10개
                    pitch: [], //가창력 상
                    voice: [], //음색 상
                    funny: [], //예능 상
                    content: [], //컨텐츠 상
                    original: [], //원곡 재현 상
                    sleep: [], // 인기 상
                    unit: [], //유닛 상
                    new: [], //신인 상
                    grow: [], //성장 상
                    master: [], //대 상
                    custom: [{ //내가 주고 싶은 상
                        episode: [], // n회 m번째
                        content: [], // 상 이름
                    }],
                    message: [{ //메시지
                        name: [], //받는 분
                        content: [], //내용
                    }],
                }
            }
        };
    }

    patchData = async () => {
        const { voteType } = this.props.voteType;
        const { checkedList } = this.props.checkedList;
        // const { voteType, checkedList } = this.props;
        const { data, voteData } = this.state;

        let findCorrectVoteData = this.state;
        let correctVoteData = {
            ...findCorrectVoteData,
            [voteType]: checkedList
        }

        this.setState({
            data: {
                ...data,
                [voteType]: correctVoteData,
            }
        });

        try {
            Axios.post('http://ec2-3-15-42-212.us-east-2.compute.amazonaws.com:3000/api/vote', {
                params: {
                    voteData
                }
            });
        } catch (e) {
            console.log(e);
        }

    }

    render() {
        return (
            <div>~VoteDataContainer~</div>
        );
    }
}

export default VoteData;