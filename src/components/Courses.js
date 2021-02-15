import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Courses extends React.Component {


    render() {
        return (<>
            {this.props.courselist && this.props.courselist.length > 0 ?
                <div className="row col-md-12"  style={{ textAlign: "center", marginTop: "15px" }}>
                    {this.props.courselist.map((value, index) => {
                        return (
                            <div key={index} className='col-md-4'>
                                <Card style={{padding:"5px"}} >
                                    <Card.Header as="h5">CourseID:{value.id}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{value.name}</Card.Title>
                                        <Card.Text>Rs. {value.fee}</Card.Text>
                                        <Card.Img style={{height:"100px", width:"auto"}} src={value.img}/>
                                            <div className="text-center">
                                            <Link to={`/courses/${value.id}/${value.name}` }> <Button  className="text-center" variant="info">Enquire</Button></Link>
                                            </div>
                                        
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                </div> : <div style={{ fontSize: "20px", fontWeight: "bolder", color: "gray", textAlign: "center" }}>No Course Data available in the Database.</div>}
        </>)

    }
}
export default Courses;