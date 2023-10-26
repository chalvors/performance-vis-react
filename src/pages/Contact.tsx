import { useParams } from 'react-router-dom'

export default function Contact() {

    const { id } = useParams();

    return <h1>Contact {id}</h1>;
}