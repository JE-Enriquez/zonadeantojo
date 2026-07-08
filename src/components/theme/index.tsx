interface ThemeType {
    colors: {
        background: string;
        btn: string;
        txt: string;
        txtSpecial: string;
    },

    fonts: {
        titles: string;
        text: string;
        base: string;
    }
}

const Theme: ThemeType = {
    colors: {
        background: '#111111',
        btn: '#D4AF37',
        txt: '#FFFFFF',
        txtSpecial: '#C0392B',
    },

    fonts: {
        titles: 'Impact, Anton, Montserrat ',
        text: 'Roboto, Open Sans, Arial, sans-serif',
        base: 'Verdana, Geneva, Tahoma, sans-serif',
    }
}

export default Theme;