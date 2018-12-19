import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from "../actions";

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState( {term: ''} );
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit} action="">
                <div className="input-group mb3">
                    <input
                        placeholder="prognoza pięciodniowa"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <div className="input-group-append"><button type="submit" className="btn btn-outline-secondary">Wybierz</button></div>
                </div>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);