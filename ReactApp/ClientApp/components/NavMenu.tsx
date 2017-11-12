import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <div className='ms-font-xxl'>
                    <i className='ms-Icon ms-Icon--OfficeLogo'></i> Office UI
                </div>
                <Nav
                    groups={[{
                        links: [
                            { name: 'Home', key: 'Home', url: '/' },
                            { name: 'Counter', key: 'Activity', url: '/counter' },
                            { name: 'Fetch data', key: 'News', url: '/fetchdata' },
                        ],
                    }]}
                />
            </div>
        );
    }
}
