import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/users/1'>
                <a>Users</a>
            </Link>
            <Link href='/posts[id]' as={`/posts/${2}`}>
                <a>Posts</a>
            </Link>
        </nav>
    )
}
