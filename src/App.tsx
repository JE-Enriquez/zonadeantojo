
import Header from './components/Header/Header'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/theme/GlobalStyle'
import Theme from './components/theme/index'
import Banner from './components/Banner/banner'
import Main from './components/Main/Main'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle theme={Theme}/>
      
          <Header appName="Zona de Antojo"/>
          <Banner />
          <Main />
          <Contact />
          <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
