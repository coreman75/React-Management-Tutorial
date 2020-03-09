import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCel from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCel>{this.props.id}</TableCel>
                <TableCel><img src={this.props.image} alt="profile" /></TableCel>      
                <TableCel>{this.props.name}</TableCel>
                <TableCel>{this.props.birthday}</TableCel>
                <TableCel>{this.props.gender}</TableCel>
                <TableCel>{this.props.job}</TableCel>
            </TableRow>
        )
    }
}

export default Customer;