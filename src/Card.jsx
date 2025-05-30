import profilePic from './assets/perfil.png'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="Profile Pic" />
            <h2 className='card-title'>Pulizada</h2>
            <p className='card-text'>Estudante de TI e hater de javascript</p>
        </div>
    );
}

export default Card;