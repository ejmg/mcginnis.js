function profilePic(props) {
    return (
        <img src={'https://photo.fb.com/' + props.username}/>
    )
}

function profileLink(props) {
    return (
        <a href={'https://fb.com/' + props.username}>{props.username}</a>
    )
}

function avatar(props) {
    return (
        <div>
            <profilePic username={props.username} />
            <profileLink username={props.username} />
        </div>
    )
}

<avatar username='ejmg'>
