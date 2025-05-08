import { ThemeProvider } from '@emotion/react'

const tema = {
    cores: {
        branco: '#FFFFFF',
        aviso: '#FF0000',
        atencao: '#FFAA00',
        focos: '#5754ED',

        primarias: {
            a: '#b5b5b5',
            b: '',
            c: '',
        },
        secundarias: {
            a: '#EBEAF9',
            b: '',
            c: ''
        },
        neutras: {
            a: '',
            b: '',
            c: '',
        },
        dark: {
            a: '',
            b: '',
        },
    },
    espacamentos:{
        xs:'8px',
        s: '16px',
        l: '32px',
    },
    fontFamily:"'Montserrat', sans-serif"
}

export const ProvedorTema = ({ children }) => {
    return (
        <ThemeProvider theme={tema}>
            {children}
        </ThemeProvider>
    )
}