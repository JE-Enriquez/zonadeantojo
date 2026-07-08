
import mamamiaImage from '../../img/mamamia.jpeg';
import perroImage from '../../img/perroAntojo.jpeg';
import wingsImage from '../../img/wingsRace.jpeg';


const Banner = () => {
  return (
    <>
    <h1 style={{textAlign: 'center', marginTop: '20px', color: '#fff'}}>Bienvenido</h1>
    <div style={{marginTop: '10px', marginBottom: '10px', width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators" style={{width: '100%'}}>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" style={{backgroundColor: 'yellow'}} className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" style={{backgroundColor: 'yellow'}} className="aria-label=Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" style={{backgroundColor: 'yellow'}} className="aria-label=Slide 3"></button>
            </div>
            <div className="carousel-inner ">
                <div className="carousel-item active" style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={mamamiaImage} className="d-block" alt="mamamia" style={{width: '100%', height: '300px'}}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 style={{color: 'black'}}>mamamia</h5>
                        <p style={{color: 'black'}}>Mamamia is a great place to eat!</p>
                    </div>
                </div>
                <div className="carousel-item" style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={perroImage} className="d-block" alt="Perro Antojo" style={{width: '100%', height: '300px'}}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 style={{color: 'black'}}>Perro Antojo</h5>
                        <p style={{color: 'black'}}>Perro Antojo es una excelente opción para disfrutar de un delicioso perro caliente.</p>
                    </div>
                </div>
                <div className="carousel-item" style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={wingsImage} className="d-block" alt="Wings Race" style={{width: '75%', height: '300px'}}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 style={{color: 'black'}}>Wings Race</h5>
                        <p style={{color: 'black'}}>Wings Race es el lugar perfecto para disfrutar de deliciosas alas de pollo.</p>
                    </div>
                </div>
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    </>
  
  )
}

export default Banner;