import { getTeams } from "./services"

async function Teams () {
    const data = await getTeams();
  return (
    <div>{JSON.stringify(data)}</div>
  )
}
export default Teams 