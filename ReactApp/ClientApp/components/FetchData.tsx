import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import {
    Persona,
    PersonaSize,
    PersonaPresence,
    PersonaInitialsColor
} from 'office-ui-fabric-react/lib/Persona';

interface FetchDataExampleState {
    persons: Person[];
    loading: boolean;
}

export class FetchData extends React.Component<RouteComponentProps<{}>, FetchDataExampleState> {
    constructor() {
        super();
        this.state = { persons: [], loading: true };

        fetch('api/SampleData/Persons')
            .then(response => response.json() as Promise<Person[]>)
            .then(data => {
                this.setState({ persons: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderPersons(this.state.persons);

        return <div>
            <div className='ms-font-su ms-fontColor-themePrimary'>
                Persons
            </div>
            { contents }
        </div>;
    }

    private static renderPersons(persons: Person[]) {
        return (
            <div>
                {persons.map(person => 
                    <div>
                        <Persona
                            presence={person.presence}
                            size={PersonaSize.regular}
                            primaryText={person.fullName}
                            secondaryText={person.jobTitle}
                            imageInitials={person.initials}
                            initialsColor={person.initialsColor} />
                    </div>
                )}
            </div>
        );
    }
}

interface Person {
    fullName: string;
    jobTitle: string;
    presence: number;
    initialsColor: number;
    initials: string;
}
