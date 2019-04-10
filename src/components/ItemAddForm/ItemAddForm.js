import React, { PureComponent } from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends PureComponent {
    state = {
        label: ''
    };

    onChangeLabel = (event) => {
        this.setState({ label: event.target.value })
    };

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({ label: '' })
    };

    render() {
        return (
            <form
                className="item-add-form mt-3 d-flex"
                onSubmit={this.onSubmitForm}>
                <input
                    className="form-control"
                    type="text"
                    placeholder="What needs to be done"
                    onChange={this.onChangeLabel}
                    value={this.state.label}
                />
                <input
                    type="submit"
                    className="btn btn-outline-secondary"
                    value="Add Item"/>
            </form>
        )
    }
}