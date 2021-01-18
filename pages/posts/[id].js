import { useRouter } from 'next/router';
import Navbar from '../../components/navbar';


export default function Post() {
    const route = useRouter();
    console.log(route);
    return (
        <div>
            <Navbar></Navbar>
            Post page {route.query.id}
        </div>
    )
}