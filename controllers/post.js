const pool = require('../config/sqlCon');

async function getpatient(Pid){
    const res = await pool.query(`SELECT * FROM healthcare WHERE Pid = ?`, [Pid]);
    return res;
}

const findpatient = async (req, res) => { 
    try {
        const aadharNumber = req.body.aadharNumber;
        //console.log(aadharNumber);
        const patient = await getpatient(aadharNumber); 
        res.json(patient[0][0]); 
        console.log(patient[0][0]);
    } catch (error) {
        console.error('Error searching for patient:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}

module.exports = findpatient;