function DashboardCard({ title, value, color }) {
  return (
    <div className={`${color} text-white rounded-xl p-6 shadow-lg`}>
      <h3 className="text-lg font-medium">{title}</h3>

      <h1 className="text-4xl font-bold mt-3">{value}</h1>
    </div>
  );
}

export default DashboardCard;