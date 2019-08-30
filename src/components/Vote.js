import React, { Component } from 'react';
import { Checkbox, Button } from 'antd';

const CheckboxGroup = Checkbox.Group;

class Vote extends Component {
    state = {
        indeterminate: true,
        checked: true,
        disabled: false,
    };

    toggleDisable = () => {
        this.setState({ disabled: true});
    };

    onChange = checkedList => {
        const { choices } = this.props
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < choices.length,
        });
    };

    render() {
        const { choices } = this.props;

        return (
            <div>
                <br />
                <CheckboxGroup
                    options={choices}
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
                    </Button>
                    <br />
                </p>

                <div style={{ borderBottom: '1px solid #E9E9E9' }} />
            </div>
        );
    }
}

export default Vote;