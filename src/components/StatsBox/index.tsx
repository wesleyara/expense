import { SStatsBox } from "./style";

interface StatsBoxProps {
  type: string;
  value: number;
  avaliable: string;
}

export function StatsBox(props: StatsBoxProps) {
  return (
    <SStatsBox>
      <h2>{props.type}</h2>
      <span className="statsSpan">
        <p>Disponível:</p>
        <p>R$ {props.avaliable}</p>
        <span className="progress">
          <span>{props.value}%</span>
          <progress value={props.value} max="100"></progress>
        </span>
      </span>
    </SStatsBox>
  );
}
