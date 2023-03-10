import { StaticImageData } from 'next/image'
import temp1 from './assets/free-cv-template-10.jpg'
import temp2 from './assets/Free-CV-Template.jpg'
import temp7 from './assets/cvtemp1.png'
import temp8 from './assets/cvtemp2.png'
import temp9 from './assets/cvtemp3.png'
import temp3 from './assets/free-cv-template-2.jpg'
import temp4 from './assets/free-cv-template-4.jpg'
import temp5 from './assets/free-cv-template-6.jpg'
import temp6 from './assets/free-cv-template-7.jpg'
import Template1 from './components/Template1'
import Template2 from './components/Template2'

interface Template{
    image: StaticImageData;
    alt: string;
    id: number;
    temp: any
}

export const templates:Template[] = [
    {
        id: 1,
        image:temp5,
        alt: 'resume sample1',
        temp: Template1
    },
    {
        id:2,
        image: temp7,
        alt: 'resume sample2',
        temp: Template2
    },
    {
        id: 3,
        image:temp5,
        alt: 'resume sample1',
        temp: Template1
    },
    {
        id:4,
        image: temp7,
        alt: 'resume sample2',
        temp: Template2
    },
    // {
    //     id:3,
    //     image: temp8,
    //     alt: 'resume sample3',
    //     temp: Template1
    // },
    // {
    //     id:4,
    //     image: temp9,
    //     alt: 'resume sample4',
    //     temp: Template2,
    // },
    // {
    //     id:5,
    //     image: temp5,
    //     alt: 'resume sample5',
    //     temp: Template1,
    // },
    // {
    //     id:6,
    //     image: temp6,
    //     alt: 'resume sample6',
    //     temp: Template2,
    // },
]

