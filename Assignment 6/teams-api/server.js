require('dotenv').config();
const mongoDBConnectionString = "mongodb://kwchan19:Kev0620@ds123728.mlab.com:23728/kwchan19-teams-api-db";
const mongoDBConnectionStringAuth = "mongodb://kwchan19:Kev0620@ds253879.mlab.com:53879/kwchan19-useraccounts";

const HTTP_PORT = process.env.PORT || 8081;

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const dataService = require('./data-service.js');
const authService = require('./data-service-auth');

const data = dataService(mongoDBConnectionString);
const dataAuth = authService(mongoDBConnectionStringAuth);

//Passport.js components
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');

//Json Web Token Setup
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

//Configure its options
const jwtOptions = {
};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt'),
jwtOptions.secretOrKey = 'NnpGyLI83WLE3%28LDGqD3vWVKkD&ox*iuVy&MPq8@KgCh2K*Df1*AylWN9$8Z5^';

const strategy = new JwtStrategy(jwtOptions, (jwtPayload, next) => {
    if (jwtPayload) {
        //Folloiwng will ensure that all routes using passport.authenticate have a req.user._id value
        next(null, { _id: jwtPayload._id });
    } else {
        next(null, false);
    }
});
//Activate system
passport.use(strategy);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(passport.initialize());

// "Employee" Routes

app.get('/employees', passport.authenticate('jwt', { session: false }), (req, res) => {
    data.getAllEmployees()
        .then(data => {
            res.json(data);
        }).catch(() => {
            res.status(500).end();
        });
});

app.get('/employees-raw', (req, res) => {
    data.getAllEmployeesRaw()
        .then(data => {
            res.json(data);
        }).catch(() => {
            res.status(500).end();
        });
});

app.get('/employee/:employeeId', (req, res) => {
    data.getEmployeeById(req.params.employeeId)
        .then(data => {
            if (data.length > 0) {
                res.json(data);
            } else {
                res.status(404).end();
            }
        }).catch(() => {
            res.status(500).end();
        });
});

app.get('/employee-raw/:employeeId', (req, res) => {
    data.getEmployeeByIdRaw(req.params.employeeId)
        .then(data => {
            if (data.length > 0) {
                res.json(data);
            } else {
                res.status(404).end();
            }
        }).catch(() => {
            res.status(500).end();
        });
});

app.put('/employee/:employeeId', (req, res) => {
    data.updateEmployeeById(req.params.employeeId, req.body)
        .then(data => {
            res.json({ message: 'Employee ' + data + ' updated successfully' });
        }).catch(() => {
            res.status(500).end();
        });
});

app.post('/employees', (req, res) => {
    data.addEmployee(req.body)
        .then(data => {
            res.json({ message: 'Employee ' + data + ' added successfully' });
        }).catch(() => {
            res.status(500).end();
        });
});

// //////////////////

// "Position" Routes

app.get('/positions', (req, res) => {
    data.getAllPositions()
        .then(data => {
            res.json(data);
        }).catch(() => {
            res.status(500).end();
        });
});

app.get('/position/:positionId', (req, res) => {
    data.getPositionById(req.params.positionId)
        .then(data => {
            if (data.length > 0) {
                res.json(data);
            } else {
                res.status(404).end();
            }
        }).catch(() => {
            res.status(500).end();
        });
});

app.put('/position/:positionId', (req, res) => {
    data.updatePositionById(req.params.positionId, req.body)
        .then(data => {
            res.json({ message: 'Position ' + data + ' updated successfully' });
        }).catch(() => {
            res.status(500).end();
        });
});

app.post('/positions', (req, res) => {
    data.addPosition(req.body)
        .then(data => {
            res.json({ message: 'Position ' + data + ' added successfully' });
        }).catch(() => {
            res.status(500).end();
        });
});

// //////////////////

// "Project" Routes

app.get('/projects', (req, res) => {
    data.getAllProjects()
        .then(data => {
            res.json(data);
        }).catch(() => {
            res.status(500).end();
        });
});

app.get('/project/:projectId', (req, res) => {
    data.getProjectById(req.params.projectId)
        .then(data => {
            if (data.length > 0) {
                res.json(data);
            } else {
                res.status(404).end();
            }
        }).catch(() => {
            res.status(500).end();
        });
});

app.put('/project/:projectId', (req, res) => {
    data.updateProjectById(req.params.projectId, req.body)
        .then(data => {
            res.json({ message: 'Project ' + data + ' updated successfully' });
        }).catch(() => {
            res.status(500).end();
        });
});

app.post('/projects', (req, res) => {
    data.addProject(req.body)
        .then(data => {
            res.json({ message: 'Project ' + data + ' added successfully' });
        }).catch(() => {
            res.status(500).end();
        });
});

// //////////////////

// "Team Routes"

app.get('/teams', (req, res) => {
    data.getAllTeams()
        .then(data => {
            res.json(data);
        }).catch(() => {
            res.status(500).end();
        });
});

app.get('/teams-raw', (req, res) => {
    data.getAllTeamsRaw()
        .then(data => {
            res.json(data);
        }).catch(() => {
            res.status(500).end();
        });
});

app.get('/team/:teamId', (req, res) => {
    data.getTeamById(req.params.teamId)
        .then(data => {
            if (data.length > 0) {
                res.json(data);
            } else {
                res.status(404).end();
            }
        }).catch(() => {
            res.status(500).end();
        });
});

app.get('/team-raw/:teamId', (req, res) => {
    data.getTeamByIdRaw(req.params.teamId)
        .then(data => {
            if (data.length > 0) {
                res.json(data);
            } else {
                res.status(404).end();
            }
        }).catch(() => {
            res.status(500).end();
        });
});

app.put('/team/:teamId', (req, res) => {
    data.updateTeamById(req.params.teamId, req.body)
        .then(data => {
            res.json({ message: 'Team ' + data + ' updated successfully' });
        }).catch(() => {
            res.status(500).end();
        });
});

app.post('/teams', (req, res) => {
    data.addTeam(req.body)
        .then(data => {
            res.json({ message: 'Team ' + data + ' added successfully' });
        }).catch(() => {
            res.status(500).end();
        });
});

// //////////////////

// Register and Login Routes

app.post('/register', (req, res) => {
    dataAuth.registerUser(req.body)
        .then((msg) => {
            res.json({ message: msg })
        })
        .catch((err) => {
            res.status(422).json({ message: err.message });
        });
});

app.post('/login', (req, res) => {
    dataAuth.checkUser(req.body)
        .then(user => {
            //Configure payload with claims
            var payload = {
                _id: user._id,
                userName: user.userName,
                fullName: user.fullName,
                role: user.role
            };

            var token = jwt.sign(payload, jwtOptions.secretOrKey);

            res.json({
                message: 'login successful', token: token
            });
        }).catch(err => res.status(422).json({ message: err.message }));
});

// //////////////////

// Catch-All 404 error

app.use((req, res) => {
    res.status(404).end();
});

// Connect to the DB and start the server

Promise.all(
    [data.connect(), dataAuth.connect()])
    .then(() => {
        app.listen(HTTP_PORT, () => { console.log('API listening on: ' + HTTP_PORT) });
    })
    .catch(err => {
        console.log("unable to start server: " + err);
        process.exit();
    });