CREATE DATABASE football;

DROP TABLE if EXISTS tournaments;
DROP Table if EXISTS players;
DROP table if EXISTS tournament_groups;
DROP table if EXISTS mach_fixtures;
DROP table if EXISTS football_clubs;
DROP table if EXISTS teams;

CREATE Table tournaments(
    tournament_id int PRIMARY KEY,
    tournament_name varchar(100),
    start_date DATE,
    end_date DATE,
    status VARCHAR(20)
);
CREATE Table tournament_groups(
    group_id int PRIMARY key,
    group_name VARCHAR(100),
    tournament_id int,
    created_at TIMESTAMP,
    FOREIGN KEY (tournament_id) REFERENCES tournaments(tournament_id)
);

CREATE table football_clubs(
    club_id int primary KEY,
    club_nmae VARCHAR(100),
    city VARCHAR(100),
    country VARCHAR(100),
    founded_year int
);

CREATE Table teams(
    team_id int PRIMARY key,
    team_name VARCHAR(100),
    club_id int,
    group_id int,
    coach_name VARCHAR(100),
    FOREIGN KEY (club_id) REFERENCES football_clubs(club_id),
    FOREIGN KEY (group_id) REFERENCES tournament_groups(group_id)
);

CREATE TABLE players(
    player_id int PRIMARY KEY,
    full_name VARCHAR(100),
    date_of_birth DATE,
    position VARCHAR(50),
    team_id int,
    jersey_number int,
    FOREIGN KEY (team_id) REFERENCES teams(team_id)
);


CREATE Table mach_fixtures(
    match_id int PRIMARY KEY,
    match_dat TIMESTAMP,
    venue VARCHAR(100),
    home_team_id int,
    away_team_id int,
    home_score int,
    away_score int,
    tournament_id int,
    match_status VARCHAR(20),
    FOREIGN KEY (home_team_id) REFERENCES teams(team_id),
    FOREIGN KEY (away_team_id) REFERENCES teams(team_id),
    FOREIGN KEY (tournament_id) REFERENCES tournaments(tournament_id)
);

