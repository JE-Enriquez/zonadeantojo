import bg from '../../img/encabezadolimpio.png';
import contactoImage from '../../img/whatsapp.png';
import mamamiaImage from '../../img/mamamia.jpeg';
import perroImage from '../../img/perroAntojo.jpeg';
import wingsImage from '../../img/wingsRace.jpeg';
import gueroImage from '../../img/taqueria.jpeg';
import { HeadDiv, HeadMenu, HeadTitle, HeadNav, HeadList, HeadDiv1, HeadDiv2, HeadLink } from './styled';

interface HeaderProps {
  appName: string;
};

console.log(bg);
const Header = ({ appName }: HeaderProps ) => {
  return (
    <HeadDiv bgImage={bg}>
      
      {/* <HeadDiv3>
        <HeadMenu src={menuImage} alt="Inicio"  /><HeadLink href="#inicio">Inicio</HeadLink>
      </HeadDiv3> */}
      
      <HeadDiv1>
        
        {/* <HeadMenu src={menuImage} alt="Menú" />    */}
        <HeadTitle>{appName}</HeadTitle>

      </HeadDiv1>
      <HeadDiv2>

        <HeadNav>
          {/* <HeadList></HeadList> */}
          <HeadList><HeadMenu src={mamamiaImage} alt="Mamamia" /><HeadLink href="#mamamia">Mamamia</HeadLink></HeadList>
          <HeadList><HeadMenu src={perroImage} alt="Perro Antojo" /><HeadLink href="#perro-antojo">Perro Antojo</HeadLink></HeadList>
          <HeadList><HeadMenu src={wingsImage} alt="Wings Race" /><HeadLink href="#wings-race">Wings Race</HeadLink></HeadList>
          <HeadList><HeadMenu src={gueroImage} alt="El Güero" /><HeadLink href="#el-güero">El Güero</HeadLink></HeadList>
          <HeadList><HeadMenu src={contactoImage} alt="Contacto" />< HeadLink href="#contacto">Contacto</ HeadLink></ HeadList>
        </HeadNav>
      </HeadDiv2>
    </HeadDiv>
  );  
};

export default Header;