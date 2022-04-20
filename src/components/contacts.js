import image from 'images/Hero.jpg';

const Contacts = () => {

    return ( 
        <div className = 'contacts-container' >
            <div className = 'personalContacts' >
                <div className = 'personalImage' >
                    <img className = 'Hero-img' src = { image } alt = 'Fuhad' / >
                </div> 
                <div className = 'personalDetails' >
                    <h1 > Fuhad Yusuf </h1> 
                    <h2 > phurhardeen @gmail.com </h2>
                    <h3 > 09029466655 </h3> 
                </div> 
            </div>
        </div>
    )
}
export default Contacts