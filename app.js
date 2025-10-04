import express from "express";
import bodyParser from "body-parser";

import tournamentsRoutes from "./routes/tournaments.routes.js";
import groupsRoutes from "./routes/tournaments_groups.routes.js";
import clubsRoutes from "./routes/footballs_clubs.routes.js";
import teamsRoutes from "./routes/teams.routes.js";
import playersRoutes from "./routes/players.routes.js";
import fixturesRoutes from "./routes/mach_fixtures.routes.js";

const app = express();
app.use(bodyParser.json());

app.use("/tournaments", tournamentsRoutes);
app.use("/groups", groupsRoutes);
app.use("/clubs", clubsRoutes);
app.use("/teams", teamsRoutes);
app.use("/players", playersRoutes);
app.use("/fixtures", fixturesRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
