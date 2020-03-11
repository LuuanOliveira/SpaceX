import React, { Component } from 'react';

export class CapsulasLast extends Component {
    static displayName = CapsulasLast.name;

    constructor(props) {
        super(props);
        this.state = { capsulasLast: [], loading: true };
    }

    componentDidMount() {
        this.preencherDados();
    }

    static renderTabela(capsulasLast) {
        return (
            <table class="table table-bordered">
                <thead>
                    <tr class="table-danger">
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
                    <tr>
                        <td>{capsulasLast.capsule_id}</td>
                        <td>{capsulasLast.capsule_serial}</td>
                        <td>{capsulasLast.status}</td>
                        <td>{capsulasLast.landings}</td>
                        <td>{capsulasLast.type}</td>
                        <td>{capsulasLast.original_launch}</td>
                        <td>{capsulasLast.details}</td>
                        <td>{capsulasLast.missions.join(', ')}</td>
                        <td>{capsulasLast.reuse_count}</td>
                    </tr>
                </tbody>
            </table>
        );
    }

    render() {
        let conteudo = this.state.loading
            ? <p><em>Loading...</em></p>
            : CapsulasLast.renderTabela(this.state.capsulasLast);

        return (
            <div>
                {conteudo}
            </div>
        );
    }

    async preencherDados() {
        const response = await fetch('SpaceX/Last');
        const data = await response.json();
        const result = JSON.parse(data);
        console.log(result)
        this.setState({ capsulasLast: result, loading: false });
    }
}
