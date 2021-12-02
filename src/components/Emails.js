import Email from './Email';

const Emails = (props) => {
    return(
        <ul>
            {props.emails.map((email, index) => (
                <Email email={email} index={index} set={props.set} key={index}/>
            ))}
        </ul>
      
    )
}

export default Emails;