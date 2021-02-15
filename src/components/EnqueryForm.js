import React from 'react';
import {Card} from 'react-bootstrap';
class EnquiryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: this.props.match.params.id,
            courseName: this.props.match.params.name,
            firstName: '',
            lastName: '',
            mobileNumber:'',
            email:'',
            query:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clear = this.clear.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/enquiries', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(response => {
                alert('Details Submitted.')
                if(response){
                    this.clear();
                }
                
            }).catch(err => console.log(err));     
    }
    clear(){
        this.setState ({
            firstName: '',
            lastName: '',
            mobileNumber:'',
            email:'',
            query:''
        })
    }
    render() {
        return (<>
            <div className='col-md-6' style={{paddingTop:'10px'}}>
            <Card>
            <Card.Header as="h2">Enquire!! Enter your Details</Card.Header>
            <Card.Body>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <div className="col-md-3">
                                <label htmlFor="first-name" >First Name:</label>
                            </div>
                            <div className="col-md-9">
                                <input
                                    className='form-control'
                                    name="firstName"
                                    id="first-name"
                                    type="text"
                                    placeholder="Enter First Name"
                                    value={this.state.firstName}
                                    onChange={e => this.setState({ firstName: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-3">
                                <label htmlFor="last-name" >Last Name:</label>
                            </div>
                            <div className="col-md-9">
                                <input
                                    className='form-control'
                                    name="lastName"
                                    id="last-name"
                                    type="text"
                                    placeholder="Enter Last Name"
                                    value={this.state.lastName}
                                    onChange={e => this.setState({ lastName: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-3">
                                <label htmlFor="mobile-number" >Mobile No:</label>
                            </div>
                            <div className="col-md-9">
                                <input
                                    className='form-control'
                                    name="mobileNumber"
                                    id="mobile-number"
                                    type="text"
                                    placeholder="Enter Mobile Number"
                                    value={this.state.mobileNumber}
                                    onChange={e => this.setState({ mobileNumber: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-3">
                                <label htmlFor="email" >Email:</label>
                            </div>
                            <div className="col-md-9">
                                <input
                                    className='form-control'
                                    name="email"
                                    id="email"
                                    type="text"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-3">
                                <label htmlFor="query" >Your Query:</label>
                            </div>
                            <div className="col-md-9">
                                <textarea
                                    className='form-control'
                                    name="query"
                                    id="query"
                                    type="textarea"
                                    placeholder="Enter Your Query"
                                    value={this.state.query}
                                    onChange={e => this.setState({ query: e.target.value })} />
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <div className="col-md-9">
                                <button type='submit' className='btn btn-primary' value="Submit" onClick={this.handleSubmit}>Submit Details</button>
                            </div>
                        </div>
                    </form>
                    </Card.Body>
                </Card>
            </div>
        </>)
    }
}
export default EnquiryForm;