import Image from 'next/image'
import carCompare from '../public/images/projects/car-compare.png'
import exambulance from '../public/images/projects/exambulance.png'
import quoteGen from '../public/images/projects/quote-gen.png'

export default function Projects() {

    const projects = [
        {
            name: 'Car Compare',
            image: carCompare,
            url: 'https://ethancarapp.ddns.net'
        },
        {
            name: 'Exambulance',
            image: exambulance,
            url: 'https://exambulance-rho.vercel.app'
        },
        {
            name: 'Quote Generator',
            image: quoteGen,
            url: 'https://ethan-react-quote-generator.herokuapp.com/'
        }
    ]

    return projects.map(project => (
        <div>
        <p>{project.name}</p>
        <a target="_blank" href={project.url}>
        <Image
        src={project.image}
        alt={project.name}
        width={375}
        height={300}
        layout='intrinsic'
        />
        </a>
        </div>
    ))
}