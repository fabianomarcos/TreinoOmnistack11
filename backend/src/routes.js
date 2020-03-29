const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', sessionController.create);

routes.get('/ongs', OngController.getOngs);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.getIncidentById)

routes.get('/incidents', IncidentsController.getIncidents);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents//;id', IncidentsController.delete);

module.exports = routes;
