const StatCard = ({ title, count, colorClass }) => (
  <div className={`${colorClass} text-white p-6 rounded-lg text-center shadow-lg`}>
    <h2 className="text-xl font-semibold opacity-90">{title}</h2>
    <p className="text-5xl font-bold mt-2">{count}</p>
  </div>
);

export default StatCard;