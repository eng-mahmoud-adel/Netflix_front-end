function ProfilePic(props) {
    return ( 
        <>
            <img onChange={props.onChange} onClick={props.onClick} width={props.width} height={props.height} src={props.imgSrc} />
        </>
     );
}
 
export default ProfilePic;