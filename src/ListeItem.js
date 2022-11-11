import React from "react";

class ListeItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            {this.props.nom} - {this.props.cin}
        </div>
    }
}

class Liste extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const tab = [
            { id: 1, nom: "Zakaria", cin: 'HF253748' },
            { id: 2, nom: "Ilyass", cin: 'HH72135' },
            { id: 3, nom: "Nouhaila", cin: 'NA19990' }
        ]
        return (
            <div>
                <ul>
                    {tab.map(elt => <ListeItem nom={elt.nom} cin={elt.cin} />)}
                </ul>
            </div>
        )

    }
}


export default Liste;