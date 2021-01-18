import { useRouter } from 'next/router';
import Navbar from '../../components/navbar';


export default function User() {
    const route = useRouter();
    return (
        <div>
            <Navbar></Navbar>
            Users page {route.query.id}
        </div>
    )
}