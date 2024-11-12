import { Helmet } from "react-helmet";
import { SITE_TITLE } from "../utils/SITE_TITLE.ts";
import Layout from "../components/Dashboard/Layout.tsx";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Bosh sahifa {SITE_TITLE}</title>
            </Helmet>

            <Layout>
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <p className="mt-4">Bu yerda kontent joylashadi...</p>
            </Layout>
        </>
    );
}

export default Home;
