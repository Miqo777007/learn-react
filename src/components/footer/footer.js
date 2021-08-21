import'./footer.css';
function Footer({address,phone,email}){
    return(
        <div className = 'footer'>
            <h1>{address}</h1>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    )
}
export default Footer;