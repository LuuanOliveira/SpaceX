import React, { Component } from 'react';

export class CapsulasPast extends Component {
    static displayName = CapsulasPast.name;

    constructor(props) {
        super(props);
        this.state = { capsulasPast: [], loading: true };
    }

    componentDidMount() {
        this.preencherDados();
    }

    static renderTabela(capsulasPast) {
        return (
            <table class="table table-bordered">
                <thead>
                    <tr class="table-primary">
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
                    {capsulasPast.map(capsulasPast => {
                        return (
                            <tr>
                                <td>{capsulasPast.capsule_id}</td>
                                <td>{capsulasPast.capsule_serial}</td>
                                <td>{capsulasPast.status}</td>
                                <td>{capsulasPast.landings}</td>
                                <td>{capsulasPast.type}</td>
                                <td>{capsulasPast.original_launch}</td>
                                <td>{capsulasPast.details}</td>
                                <td>{capsulasPast.missions.join(', ')}</td>
                                <td>{capsulasPast.reuse_count}</td>
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
            : CapsulasPast.renderTabela(this.state.capsulasPast);

        return (
            <div>
                {conteudo}
            </div>
        );
    }

    async preencherDados() {
        const response = await fetch('SpaceX/Past');
        const data = await response.json();
        const result = JSON.parse(data);
        this.setState({ capsulasPast: result, loading: false });
    }
}