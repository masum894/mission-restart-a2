import React from 'react';

const TicketList = ({ tickets, onTicketClick }) => {
  return (
    <div className="ticket-grid">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="ticket-card" onClick={() => onTicketClick(ticket)}>
          <div className="ticket-header">
            <h4>{ticket.title}</h4>
            <span className={`status-badge ${ticket.status.toLowerCase()}`}>
              ● {ticket.status}
            </span>
          </div>
          <p className="desc">{ticket.description.substring(0, 70)}...</p>
          <div className="ticket-footer">
            <span className="id-priority">#{ticket.id} {ticket.priority}</span>
            <span className="customer">{ticket.customer}</span>
            <span className="date">📅 {ticket.createdAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketList;