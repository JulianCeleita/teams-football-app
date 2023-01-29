import { getTeams } from "./services"

async function Teams () {
    const data = await getTeams();
  return (
    <div>Teams </div>
  )
}
export default Teams 