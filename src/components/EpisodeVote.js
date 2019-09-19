import React, { Component } from 'react';

class EpisodeVote extends Component {
    constructor() {
        super();
        this.state = {
            inputs: [{ episode: "", number: "" }]
        };
    }

    handleEpisodeChange = idx => evt => {
        const newinputs = this.state.inputs.map((input, sidx) => {
            if (idx !== sidx) return input;
            return { ...input, episode: evt.target.value };
        });

        this.setState({ inputs: newinputs });
    };
    handleNumberChange = idx => evt => {
        const newinputs = this.state.inputs.map((input, sidx) => {
            if (idx !== sidx) return input;
            return { ...input, number: evt.target.value };
        });

        this.setState({ inputs: newinputs });
    };

    handleAddInputFillter = () => {
        this.setState({
            inputs: this.state.inputs.concat([{ episode: "", number: "" }])
        });
    }

    handleRemove = id => () => {
        console.log(this.state.inputs)
        this.setState({
            inputs: this.state.inputs.filter((s, sid) => id !== sid)
        });
    }
    handleSubmit = evt => {
        console.log(this.state.inputs);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.state.inputs.map((input, id) => (
                    <div>
                        <input
                            type="number"
                            value={input.episode}
                            onChange={this.handleEpisodeChange(id)}
                        />
                        <input
                            type="number"
                            value={input.number}
                            onChange={this.handleNumberChange(id)}
                        />
                        <button
                            type="button"
                            onClick={this.handleRemove(id)}
                        >
                            -
                </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={this.handleAddInputFillter}
                >
                    Add
            </button>
                <button>submit</button>
            </form>
        );
    }
}
export default EpisodeVote;