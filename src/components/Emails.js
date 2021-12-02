import Email from './Email';

const Emails = (props) => {
    return(
        <ul>
            {props.emails.filter(el => {
                if(props.search === ''){
                    return el
                }
                else if(el.title.toLowerCase().includes(props.search.toLowerCase())){
                    return el;
                }
            }).map((email, index) => (
                <Email 
                    email={email}
                    index={index}
                    set={props.set} 
                    key={index} 
                    handleClickEmail={props.handleClickEmail}/>
                
            ))}
        </ul>
      
    )
}

export default Emails;