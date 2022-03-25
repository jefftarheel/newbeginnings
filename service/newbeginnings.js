
let participants = [];

const newbeginnings = {

    createParticipant: (req, res) => {
        const referenceId = generateId(req.body);
        participants.push({referenceId, ...req.body});
        res.json({referenceId: referenceId});
    },

    getParticipant: (req, res) => {
      const referenceId = req.params.referenceId;
      const participant = participants.find(p => p.referenceId === referenceId);
      if (participant) {
        res.json(participant);
      } else {
        res.status(404).send('Participant not found');
      }
    },

    updateParticipant: (req, res) => {
      const referenceId = req.params.referenceId;
      const newRecord = req.body;
      participants = participants.map(p =>
          p.referenceId === referenceId ? { ...p, ...newRecord } : p
      );
      res.json("Update successful.");
    },

    deleteParticipant: (req, res) => {
      const referenceId = req.params.referenceId;
      participants = participants.filter(p => p.referenceId !== referenceId);
      res.json("Delete successful.");
    },

};

/* Use first/last name initials, day of birthday, random 4 digit number */
const generateId = ({name, dateOfBirth, phoneNumber, address}) => {
  let referenceId = '';
  let foundId = true;

  // Make sure there is not already an existing id value
  while (foundId) {
    // First/last name initials
    const nameTokens = name.split(' ');
    referenceId = referenceId + nameTokens[0].charAt(0).toUpperCase() + nameTokens[1].charAt(0).toUpperCase();

    // Day of month of birthdate
    referenceId = referenceId + new Date(dateOfBirth).getDate() + "-";

    // Random 4 digit number
    referenceId = referenceId + Math.floor(1000 + Math.random() * 9000).toString();

    if (!participants.find((p) => p.referenceId === referenceId)) {
      foundId = false;
    }
  }

  return referenceId;
}

module.exports = newbeginnings;
