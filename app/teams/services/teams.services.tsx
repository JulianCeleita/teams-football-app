export const getTeams = async () => {
    const res = await fetch ('http://api.football-data.org/v4/teams/2061');
    return res.json()
}

