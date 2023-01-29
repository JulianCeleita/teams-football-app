"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Teams } from "../../models/team.model";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
`;

interface Props {
  teams: Teams;
}

function TeamList({ teams }: Props) {
  return (
    <CardContainer>
      {teams.teams.map((t) => (
        <Card key={t.id}>
          <CardHeader title={t.name} />
          <CardMedia component="img" height="194" image={t.crestUrl} />
          <div>
            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography> Equipment </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{t.clubColors}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Stadium</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{t.venue}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>WebSite</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{t.website}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Card>
      ))}
    </CardContainer>
  );
}
export default TeamList;
