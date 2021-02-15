import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {courseList} from '../actions'
import Courses from '../components/Courses'

class Home extends Component {

    componentDidMount(){
        this.props.courseList();
    }
    
    render(){
        console.log(this.props.courses)
        return(
            
            <div> 
                <Courses courselist={this.props.courses.courses}></Courses>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state.courses)
    return{
        courses: state.courses
    }

  }
  function mapDispatchToProps(dispatch){
return bindActionCreators({courseList},dispatch)
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home);