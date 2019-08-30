import React, { Component } from 'react';

class VoteData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voteData: {
                email: null,
                password: null,
                data: {
                    problem: [], //문제 10개
                    part: {
                        pitch: [], //가창력 상
                        voice: [], //음색 상
                        funny: [], //예능 상
                        content: [], //컨텐츠 상
                        original: [], //원곡 재현 상
                    },
                    fame: {
                        sleep: null, // 인기 상
                        unit: null, //유닛 상
                        new: null, //신인 상
                        grow: null, //성장 상
                    },
                    master: [null], //대 상
                    custom: [{ //내가 주고 싶은 상
                        episode: null, // n회 m번째
                        content: null, // 상 이름
                    }],
                    message: [{ //메시지
                        name: null, //받는 분
                        content: null, //내용
                    }],
                }
            }
        };
    }
    render() {
        return (
            <div>asdf</div>
        );
    }
}

export default VoteData;