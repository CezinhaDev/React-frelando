import { ThemeProvider } from '@emotion/react'

const tema = {
    cores: {
        branco: '#FFFFFF',
        aviso: '#FF0000',
        atencao: '#FFAA00',
        focos: '#5754ED',

        primarias: {
            a: '#5754ED',
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
    espacamento:{
        s: '16px',
        l: '32px',
    }
}

export const ProvedorTema = ({ children }) => {
    return (
        <ThemeProvider theme={tema}>
            {children}
        </ThemeProvider>
    )
}