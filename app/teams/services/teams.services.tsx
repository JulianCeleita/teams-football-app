export const getTeams = async () => {
    const res = await fetch ('http://api.football-data.org/v2/teams', {
        headers: {
            "X-Auth-token": "a8ee1481d2064d418a652bc592c97e9f" ,
        }
    });
    return res.json()
}

