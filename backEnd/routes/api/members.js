const express = require('express');
const members = require('../../Members');

const router = express.Router();

// Making an API to pass data
router.get('/', (req, res) => res.json(members));

// Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `Requested id ${req.params.id} not found` });
    }
});

// Middleware to parse JSON request bodies
router.use(express.json());

// Add new member
router.post('/', (req, res) => {
    const newMember = {
        id: members.length + 1,
        color: req.body.color || 'defaultColor',
        value: req.body.value,
    };
    console.log(req.body);
    if (!newMember.color || !newMember.value) {
        return res.status(400).json({ msg: 'Please include color and value' });
    }

    members.push(newMember);
    res.json(members);
});

module.exports = router;
