import React, { Component } from 'react';

export class Capsulas extends Component {
    static displayName = Capsulas.name;

    constructor(props) {
        super(props);
        this.state = { capsulas: [], loading: true };
    }

    componentDidMount() {
        this.preencherDados();
    }

    static renderTabela(capsulas) {
        return (
            <table class="table table-bordered">
                <thead>
                    <tr class="table-dark">
                        <th>Capsula</th>
                        <th>Serial</th>
                        <th>Status</th>
                        <th>Desembarque</th>
                        <th>Tipo</th>
                        <th>Lancamento</th>
                        <th>Detalhes</th>
                        <th>Missoes</th>
                        <th>Reutilizada</th>
                    </tr>
                </thead>
                <tbody>
                    {capsulas.map(capsulas => {
                        return (
                            <tr>
                                <td>{capsulas.capsule_id}</td>
                                <td>{capsulas.capsule_serial}</td>
                                <td>{capsulas.status}</td>
                                <td>{capsulas.landings}</td>
                                <td>{capsulas.type}</td>
                                <td>{capsulas.original_launch}</td>
                                <td>{capsulas.details}</td>
                                <td>{capsulas.missions.join(', ')}</td>
                                <td>{capsulas.reuse_count}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }

    render() {
        let conteudo = this.state.loading
            ? <p><em>Loading...</em></p>
            : Capsulas.renderTabela(this.state.capsulas);

        return (
            <div>
                {conteudo}
            </div>
        );
    }

    async preencherDados() {
        const response = await fetch('SpaceX');
        const data = await response.json();
        const result = JSON.parse(data);
        this.setState({ capsulas: result, loading: false });
    }
}
