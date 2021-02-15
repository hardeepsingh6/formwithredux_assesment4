const baseUrl= "http://localhost:3001"
export function courseList(){
    const output = fetch(`${baseUrl}/courses`,
        {method:'GET'})
    .then((response)=> response.json())
    return{
        type:'COURSE_LIST',
        payload: output
    }
}