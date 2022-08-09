import { extendTheme } from 'native-base';

export const THEME = extendTheme({
    colors: {
        primary: {
            700: '#7BCCC6'
        },
        secondary: {
            700: '#E15554'
        },
        grape: {
            700: '#805d93',
            500: '#8c6c9d',
            300: '#b19abc',
        },
        gray: {
            700: '#121214',
            600: '#202024',
            500: '#29292E',
            400: '#323238',
            300: '#7C7C8A',
            200: '#C4C4CC',
            100: '#E1E1E6'
        },
        white: '#FFFFFF'
    },
    fonts: {
        heading: 'Poppins_700Bold',
        body: 'Poppins_400Regular',
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
    },
    sizes: {
        14: 56
    }
});