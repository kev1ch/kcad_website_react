
import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';

import { FacebookProvider, Page } from 'react-facebook';

function News() {

    return (
        <>  

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FacebookEmbed url="https://www.facebook.com/KCADygk/posts/pfbid02SeKRAKKBwmYhFUocnCNBesRe7hKcKrkQ5mKyxN8XmLxGYi4S6tt8GMTiBd3GoNRml" width={550} />
            </div>

            
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url="https://www.instagram.com/__kcad__/p/C-IcJQ4gwBs/" width={328} />
            </div>
            */}
            

            {/* {FacebookProvider} from 'react-facebook'
            <FacebookProvider appId="123456789">
                <Page style={{ display: 'flex', justifyContent: 'center' }} href="https://www.facebook.com/KCADygk/" tabs="timeline" />
            </FacebookProvider>
            */}
        </>
    );

}

export default News;