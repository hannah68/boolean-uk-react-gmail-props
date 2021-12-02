import './Email.css';

const Email = (props) => {
    const me = (e) => {
      // props.setHandleClick(e.target.id)
    
      console.log(props.email)
      props.handleClickEmail(props.email)
    }
    
    const toggleStar = targetEmail => {
        const updatedEmails = emails =>
        emails.map(email =>
            email.id === targetEmail.id
              ? { ...email, starred: !email.starred }
              : email
        )
        props.set(updatedEmails);
    }
    
    const toggleRead = targetEmail => {
        const updatedEmails = emails =>
        emails.map(email =>
            email.id === targetEmail.id ? { ...email, read: !email.read } : email
          )
        props.set(updatedEmails);
    }

    return(
        <li 
        onClick={me}
        key={props.index} 
        className={`email ${props.email.read ? 'read' : 'unread'}`}
        >
            <div className="select">
                <input 
                className="select-checkbox" 
                type="checkbox" 
                checked={props.email.read} 
                onChange={() => toggleRead(props.email)}
                    />
            </div>
            <div className="star">
                <input 
                className="star-checkbox" 
                type="checkbox" 
                checked={props.email.starred} 
                onChange={() => toggleStar(props.email)}
                />
            </div>
            <div className="sender">{props.email.sender}</div>
            <div className="title">{props.email.title}</div>
        </li>
    )
}

export default Email;