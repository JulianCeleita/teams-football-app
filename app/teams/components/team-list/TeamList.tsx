'use client';

import { Card } from '@mui/material';
import { Teams } from '../../models/team.model';

interface Props {
    teams: Teams;
}

function TeamList({teams}: Props) {
  return (
    <div> 
        {teams.teams.map((t) => (
           <Card key={t.id}>{t.name}</Card> 
        ))}
    </div>
  )
}
export default TeamList