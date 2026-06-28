import React from "react";

const StatsBar = ({ stats }) => {
  if (!stats) return null;

  const getCount = (arr, key, val) =>
    (arr || []).find((x) => x._id === val)?.count || 0;

  const todo       = getCount(stats.byStatus, "_id", "todo");
  const inProgress = getCount(stats.byStatus, "_id", "in-progress");
  const done       = getCount(stats.byStatus, "_id", "completed");

  return (
    <div className="stats-bar">
      <StatPill label="Total"       value={stats.total}   color="var(--ink)" />
      <StatPill label="To Do"       value={todo}          color="var(--ink-3)" />
      <StatPill label="In Progress" value={inProgress}    color="var(--purple)" />
      <StatPill label="Done"        value={done}          color="var(--green)" />
      {stats.overdue > 0 && (
        <StatPill label="Overdue" value={stats.overdue} color="var(--danger)" alert />
      )}
    </div>
  );
};

const StatPill = ({ label, value, color, alert }) => (
  <div className={`stat-pill ${alert ? "stat-alert" : ""}`}>
    <span className="stat-value" style={{ color }}>{value}</span>
    <span className="stat-label">{label}</span>
  </div>
);

export default StatsBar;
