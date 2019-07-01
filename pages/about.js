import Link from 'next/link';
import Layout from '../components/layout'

const about = () => (
    <Layout title="About">
        <Link href = "/">
            <a> Go to Home </a>
        </Link>
        <p>Just somthing about me</p> 
    </Layout>
);

export default about;