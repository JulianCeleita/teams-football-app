import { Team } from '../../models/team.model';

interface Props {
    teams: Team[];
}

function TeamList({teams}: Props) {
  return (
    <div> 
        {teams.map((t) => (
            <p key={t.id}>{t.name}</p>
        ))}
    </div>
  )
}
export default TeamList