const TicketItem = ({ ticket, onClick }) => (
  <div 
    onClick={() => onClick(ticket)}
    className="bg-white p-4 rounded-md shadow-sm border-l-4 border-red-500 cursor-pointer hover:shadow-md transition-all mb-4"
  >
    <div className="flex justify-between items-start">
      <h3 className="font-bold text-gray-800">{ticket.title}</h3>
      <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Open</span>
    </div>
    <p className="text-xs text-gray-500 mt-2 leading-relaxed">{ticket.description}</p>
    <div className="mt-4 flex justify-between text-[10px] font-bold text-gray-400">
      <span className="text-red-500">#{ticket.id} HIGH PRIORITY</span>
      <span>{ticket.date || "12/05/2024"}</span>
    </div>
  </div>
);

export default TicketItem;