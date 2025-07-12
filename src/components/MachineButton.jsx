import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const statusColors = {
  normal: "green",
  warning: "yellow",
  error: "red",
};

export default function MachineButton({ machine }) {
  const navigate = useNavigate();

  return (
    <div
      title={machine.name}
      onClick={() => navigate(`/detail/${machine.id}`)}
      style={{
        position: "absolute",
        left: machine.x,
        top: machine.y,
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        backgroundColor: statusColors[machine.status],
        border: "2px solid white",
        cursor: "pointer",
      }}
    />
  );
}
