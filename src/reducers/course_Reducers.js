export default function(state={}, action){
    switch(action.type){
     case 'COURSE_LIST':
         return {...state,courses:action.payload}
    default:
        return state;
    }    
}