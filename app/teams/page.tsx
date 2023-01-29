import { TeamList } from "./components/team-list";
import { getTeams } from "./services"

async function Teams () {
    const data = await getTeams();
  return (
    <div>
        <TeamList teams={data} />
    </div>
  )
}
export default Teams 