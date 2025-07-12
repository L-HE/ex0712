import { useParams } from "react-router-dom";
import machines from "../data/machines";

export default function MachineDetailPage() {
  const { id } = useParams();
  const machine = machines.find((m) => m.id === parseInt(id));

  if (!machine) return <div>기계 정보를 찾을 수 없습니다.</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{machine.name} 상세 정보</h2>
      <p>상태: {machine.status}</p>
      <p>위치: ({machine.x}px, {machine.y}px)</p>
      {/* 이후 API 연동되면 더 많은 정보 표시 가능 */}
    </div>
  );
}
