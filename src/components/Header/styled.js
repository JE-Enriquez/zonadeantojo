import styled from 'styled-components';

const HeadDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
    box-sizing: border-box;
    // border-bottom: 2px solid ${props => props.theme.colors.btn};
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

const HeadDiv1 = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin: 10px 0 10px 40px;
`;

const HeadDiv2 = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin: 10px 40px 10px 0;
`;

const HeadDiv3 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;
    // background-color: ${props => props.theme.colors.background};
    
const HeadTitle = styled.h1`
    color: ${props => props.theme.colors.txt};
    font-family: ${props => props.theme.fonts.titles};
    font-size: 2rem;
    text-align: center;
    

`;

const HeadLink = styled.a`
    
    text-decoration: none;
    color: ${props => props.theme.colors.txt};
    font-family: ${props => props.theme.fonts.titles};
    font-size: .8rem;
    text-align: center;

`;
const HeadMenu = styled.img`
    background-color: #25d366;
    width: 50px; /* Tamaño sugerido para tu icono de menú */
    height: auto;
    cursor: pointer;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 50%; 
    
`;

const HeadLabel = styled.label`
    // display: none;
    // position: absolute;

`;

const HeadNav = styled.nav`
    Display: flex;
    
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.txt};
    list-style: none;
    gap: 20px;

    
`;


const HeadList = styled.li`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    
    font-family: ${props => props.theme.fonts.titles};
    font-size: 1rem;
    text-align: center;
    align-items: center;

    
`;




export {
    HeadDiv,
    HeadTitle,
    HeadMenu,
    HeadNav,
    HeadList,
    HeadDiv1,
    HeadDiv2,
    HeadDiv3,
    HeadLabel,
    HeadLink


};