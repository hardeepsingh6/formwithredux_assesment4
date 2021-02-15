import React from 'react';
import { Table } from 'react-bootstrap';
class Enquiries extends React.Component {
    constructor() {
        super();

        this.state = {
            enquiries: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3001/enquiries',
            { method: 'GET' }).then(response => response.json()).then(response => {


                this.setState({
                    enquiries: response
                })
            })
    }

    render() {
        return (<>
            <h3 style={{ textAlign: "center", marginBottom: "35px" }}>!! All Enquiries !!</h3>
            {this.state.enquiries.length > 0 ?
                <Table striped bordered hover size="md" >
                    <thead>
                        <tr style={{ backgroundColor: "grey" }}>
                            <th>Course ID</th>    
                            <th>Course Name</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mobile Number</th>
                            <th>Email</th>
                            <th>Query</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.enquiries.map((value, index) => {
                            return (<>
                                <tr key={index} style={{ backgroundColor: "white" }}>
                                    <td>{value.courseId}</td>
                                    <td>{value.courseName}</td>
                                    <td>{value.firstName}</td>
                                    <td>{value.lastName}</td>
                                    <td>{value.mobileNumber}</td>
                                    <td>{value.email}</td>
                                    <td>{value.query}</td>
                                </tr>
                            </>)
                        })}

                    </tbody>
                </Table>
                : <div style={{ fontSize: "20px",  color: "blue", textAlign: "center" }}>No Enquiry records available</div>}</>)

    }
}
export default Enquiries;