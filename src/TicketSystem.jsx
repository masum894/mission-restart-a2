import React, { useState, useEffect } from 'react';
import StatCard from './StatCard';
import TicketItem from './TicketItem';
import ControlPanel from './ControlPanel';

const TicketSystem = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  useEffect(() => {
    fetch('/ticketData.json')
      .then(res => res.json())
      .then(data => setTickets(data))
      .catch(err => console.error("Error:", err));
  }, []);

  const handleStep1 = () => {
    if (selectedTicket) {
      setTickets(tickets.filter(t => t.id !== selectedTicket.id));
      setInProgress(prev => prev + 1);
    }
  };

  const handleStep2 = () => {
    if (inProgress > 0) {
      setInProgress(prev => prev - 1);
      setResolved(prev => prev + 1);
      setSelectedTicket(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">CS — Ticket System</h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-8">
        <StatCard title="In-Progress" count={inProgress} colorClass="bg-purple-600" />
        <StatCard title="Resolved" count={resolved} colorClass="bg-emerald-500" />
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        
        
        <div className="col-span-1 md:col-span-8 order-2 md:order-1">
          <h2 className="text-lg font-bold mb-4 text-gray-700">Customer Tickets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tickets.map(ticket => (
              <TicketItem 
                key={ticket.id} 
                ticket={ticket} 
                onClick={setSelectedTicket} 
              />
            ))}
          </div>
        </div>

        
        <div className="col-span-1 md:col-span-4 order-1 md:order-2">
          <h2 className="text-lg font-bold mb-4 text-gray-700">Task Status</h2>
          <div className="sticky top-4">
            <ControlPanel 
              selectedTicket={selectedTicket}
              onStep1={handleStep1}
              onStep2={handleStep2}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TicketSystem;