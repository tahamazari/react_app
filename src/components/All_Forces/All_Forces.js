import React, {Component} from 'react';
import './All_Forces.scss';
import {connect} from 'react-redux';
import $ from 'jquery';

import {Fetch_All_Forces} from '../../actions/all_forces_actions.js';

class All_Forces extends Component {

    componentDidMount(){       
        if('all_forces_data' in localStorage){
            var local_all_forces = JSON.parse(localStorage.getItem('all_forces_data'))
        }
        else {
            this.props.Fetch_All_Forces()
        }
    }

    map_all_forces_table(data){
        if(typeof(data) == "string"){
            data = JSON.parse(data)
        }

        return(
            <table id="all_forces_table" className="display">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((value) => {
                        return (
                            <tr>
                                <td>{value.name}</td>
                                <td>{value.id}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        )
    }

    display_all_forces(){
        if('all_forces_data' in localStorage){
            this.map_all_forces_table(JSON.parse(localStorage.getItem('all_forces_data')))
        }
        else {
            this.map_all_forces_table(this.props.all_forces_data)
        }
    }


    render(){
        return(
            <div className="all_forces_main">
                {
                    'all_forces_data' in localStorage ?
                        this.map_all_forces_table(localStorage.getItem('all_forces_data'))
                        : this.map_all_forces_table(this.props.all_forces_data)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        all_forces_data: state.all_forces.all_forces_data
    }
}

export default connect(mapStateToProps, {Fetch_All_Forces})(All_Forces);