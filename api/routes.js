'use strict';

const controller = require('./controller');

module.exports = (app) => {
  app.route('/').post(controller.createRegistration);
  app.route('/:referenceId').get(controller.getParticipantInfo);
  app.route('/:referenceId').put(controller.updateParticipantInfo);
  app.route('/:referenceId').delete(controller.deleteParticipant);
}