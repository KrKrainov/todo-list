import React, { PureComponent } from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends PureComponent {
    submitForm = (event) => {
        event.preventDefault();
        this.props.onItemAdded(event.target.querySelector('input[type=text]').value);
    };

    render() {
        return (
            <form
                className="item-add-form row mt-3"
                onSubmit={this.submitForm}>
                <div className="col-sm-9">
                    <input className="form-control mb-3" type="text" placeholder="Text ToDo"/>
                </div>
                <div className="col-sm-3">
                    <button
                        type="submit"
                        className="btn btn-outline-secondary float-right">
                        Add Item
                    </button>
                </div>
            </form>
        )
    }
}