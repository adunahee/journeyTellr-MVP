import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContributorList extends Component {
    render() {
        return (
            <div>
                <h1>Contributor List</h1>
            </div>
        )
    }
};

export default connect()(ContributorList);