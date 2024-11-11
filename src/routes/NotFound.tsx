import { Helmet } from 'react-helmet'
import { SITE_TITLE } from "../utils/SITE_TITLE.ts";

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>Tizim xatosi {SITE_TITLE}</title>
            </Helmet>

            <div>
                NotFound
            </div>
        </>
    );
}

export default NotFound;
