const ShowEmail = (props) => {
    // props.handleClick.map(el =>)}
    // console.log(props.handleClick)
    return(
        {props.handleClick.map(el => {
            return(
                <div>
                    <h2 className='sender-name'>{props.handleClick.sender}</h2>
                    <p className='sender-title'>{props.handleClick.title}</p>
                </div> 
            )
        })}
        
    )
}

export default ShowEmail;