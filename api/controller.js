'use strict';

const registrationService = require('../service/newbeginnings');

const controllers = {

  createRegistration: function(req,res){
    registrationService.createParticipant(req, res, (err, part) => {
      if (err)
        res.send(err);
      res.json(part);
    });
  },

  getParticipantInfo: function(req, res){
    registrationService.getParticipant(req, res, (err, part) => {
      if (err)
        res.status(500).send(err);
      res.json(part);
    });
  },

  updateParticipantInfo: function(req, res){
    registrationService.updateParticipant(req, res, (err, part) => {
      if (err)
        res.status(500).send(err);
      res.json(part);
    });
  },

  deleteParticipant: function(req, res){
    registrationService.deleteParticipant(req, res, (err, part) => {
      if (err)
        res.status(500).send(err);
      res.json(part);
    });
  },

};

module.exports = controllers;