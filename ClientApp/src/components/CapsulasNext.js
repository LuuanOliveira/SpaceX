import React, { Component } from 'react';

export class CapsulasNext extends Component {
    static displayName = CapsulasNext.name;

    constructor(props) {
        super(props);
        this.state = { capsulasNext: [], loading: true };
    }

    componentDidMount() {
        this.preencherDados();
    }

    static renderTabela(capsulasNext) {
        return (
            <table class="table table-bordered">
                <thead>
                    <tr class="table-success">
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
                        <td>{capsulasNext.capsule_id}</td>
                        <td>{capsulasNext.capsule_serial}</td>
                        <td>{capsulasNext.status}</td>
                        <td>{capsulasNext.landings}</td>
                        <td>{capsulasNext.type}</td>
                        <td>{capsulasNext.original_launch}</td>
                        <td>{capsulasNext.details}</td>
                        <td>{capsulasNext.missions.join(', ')}</td>
                        <td>{capsulasNext.reuse_count}</td>
                    </tr>
                </tbody>
            </table>
        );
    }

    render() {
        let conteudo = this.state.loading
            ? <p><em>Loading...</em></p>
            : CapsulasNext.renderTabela(this.state.capsulasNext);

        return (
            <div>
                {conteudo}
            </div>
        );
    }

    async preencherDados() {
        const response = await fetch('SpaceX/Next');
        const data = await response.json();
        const result = JSON.parse(data);
        this.setState({ capsulasNext: result, loading: false });
    }
}
