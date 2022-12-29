import { writable } from 'svelte/store';

export const userObject = writable(null);
export const uid = writable(null);
export const templates = [
    {
        id: 1,
        name: 'Ocean',
        bgColor: 'DodgerBlue',
        txtColor: 'white',
        description: 'Simple',
    },
    {
        id: 2,
        name: 'Earth',
        bgColor: '#806043',
        txtColor: 'white',
        description: 'Colorful',
    },
    {
        id: 3,
        name: 'Tree',
        bgColor: 'green',
        txtColor: 'white',
        description: 'Beautiful',
    },
    {
        id: 4,
        name: 'Sky',
        bgColor: 'LightSkyBlue',
        txtColor: 'black',
        description: 'Professional',
    },
    {
        id: 5,
        name: 'Air',
        bgColor: 'transparent',
        txtColor: 'black',
        description: 'Optimal',
    },
];

export const selectedTemplate = writable(5);