const ControlPanel = ({ selectedTicket, onStep1, onStep2 }) => {
  if (!selectedTicket) {
    return <div className="text-gray-400 italic text-center p-10 border-2 border-dashed rounded-lg">Select a ticket to see actions</div>;
  }

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-bold text-gray-700 mb-4 text-sm">{selectedTicket.title}</h3>
      
      
      <button 
        onClick={onStep1}
        className="w-full bg-emerald-500 text-white py-2.5 rounded font-bold hover:bg-emerald-600 transition mb-3"
      >
        Complete (Step 1)
      </button>

      
      <button 
        onClick={onStep2}
        className="w-full bg-blue-500 text-white py-2.5 rounded font-bold hover:bg-blue-600 transition"
      >
        Complete (Step 2)
      </button>
    </div>
  );
};

export default ControlPanel;