import { Helmet } from "react-helmet";
import { SITE_TITLE } from "../utils/SITE_TITLE.ts";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Bosh sahifa {SITE_TITLE}</title>
            </Helmet>

            <div>
                Home
            </div>
        </>
    );
}

export default Home;
