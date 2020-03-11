import React, { Component } from 'react';

export class CapsulasFuture extends Component {
    static displayName = CapsulasFuture.name;

    constructor(props) {
        super(props);
        this.state = { capsulasFuture: [], loading: true };
    }

    componentDidMount() {
        this.preencherDados();
    }

    static renderTabela(capsulasFuture) {
        return (
            <table class="table table-bordered">
                <thead>
                    <tr class="table-warning">
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
                    {capsulasFuture.map(capsulasFuture => {
                        return (
                            <tr>
                                <td>{capsulasFuture.capsule_id}</td>
                                <td>{capsulasFuture.capsule_serial}</td>
                                <td>{capsulasFuture.status}</td>
                                <td>{capsulasFuture.landings}</td>
                                <td>{capsulasFuture.type}</td>
                                <td>{capsulasFuture.original_launch}</td>
                                <td>{capsulasFuture.details}</td>
                                <td>{capsulasFuture.missions.join(', ')}</td>
                                <td>{capsulasFuture.reuse_count}</td>
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
            : CapsulasFuture.renderTabela(this.state.capsulasFuture);

        return (
            <div>
                {conteudo}
            </div>
        );
    }

    async preencherDados() {
        const response = await fetch('SpaceX/Future');
        const data = await response.json();
        const result = JSON.parse(data);
        this.setState({ capsulasFuture: result, loading: false });
    }
}
