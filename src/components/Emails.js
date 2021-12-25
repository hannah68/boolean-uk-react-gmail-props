import Email from './Email';

const Emails = (props) => {
    const {filteredEmails, toggleRead, toggleStar} = props;

    return(
        <ul>
            {filteredEmails.map((email, index) => {
                return(<Email 
                            key={index} 
                            email={email} 
                            toggleRead={toggleRead}
                            toggleStar={toggleStar}/>)
            })}
        </ul>
      
    )
}

export default Emails;

// {props.emails.filter(el => {
//     if(props.search === ''){
//         return el
//     }
//     else if(el.title.toLowerCase().includes(props.search.toLowerCase())){
//         return el;
//     }
// }).map((email, index) => (
//     <Email 
//         email={email}
//         index={index}
//         set={props.set} 
//         key={index} 
//         handleClickEmail={props.handleClickEmail}/>
    
// ))}