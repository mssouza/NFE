import * as React from "react";

import { TicketItem } from "./TicketItem";
import { TicketContent } from "./TicketContent";
import { ITicket } from "../../models/ITicket";
import * as Api from "../../Api";

import "react-simple-flex-grid/lib/main.css";
import "./TicketList.scss";

// Props
interface ITicketListProps {
    address: string;
}

// State
interface ITicketListState {
    tickets: Array<ITicket>;
}

export class TicketList extends React.Component<ITicketListProps, ITicketListState> {
    constructor(props: ITicketListProps) {
        super(props);

        this.state = { tickets: new Array<ITicket>() };
    }

    public async componentDidMount(): Promise<void> {
        try {
            this.setState({ tickets: await Api.Ticket.find(this.props.address) });
        } catch(err) {
            console.error(err);
        }
    }

    public render(): React.ReactNode {
        return <table className="ticket-list">
            <thead>
                <tr>
                    <th><input type="checkbox" title="Tout cocher / décocher" /></th>
                    <th>#</th>
                    <th>Tracker</th>
                    <th>Statut</th>
                    <th>Priorité</th>
                    <th>Sujet</th>
                    <th>Reporté par</th>
                    <th>Assigné à</th>
                    <th>Dernière mise à jour</th>
                </tr>
            </thead>
            <tbody className="ticket-list__content">
                {
                    this.state.tickets.map(ticket => {
                        return <TicketItem ticket={ ticket } />
                    })
                }
            </tbody>
        </table>;
    }
}
