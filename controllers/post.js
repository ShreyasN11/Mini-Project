const pool = require('../config/sqlCon');

async function getpatient(Pid){
    const res = await pool.query(`SELECT * FROM healthcare WHERE Pid = ?`, [Pid]);
    return res;
}

const findpatient = async (req, res) => { 
    try {
        const aadharNumber = req.body.aadharNumber;
        const patient = await getpatient(aadharNumber); 
        res.json(patient[0][0]); 
    } catch (error) {
        console.error('Error searching for patient:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}

async function getrole(email){
    const res = await pool.query(`SELECT role FROM roles WHERE emailID = ? `, String(email) ); //!COMPLETE QUERY
    return res;
}

const checkrole = async (req, res) => {
    try{
        const email = req.body.email;
        const role = await getrole(email);
        res.json(role[0][0]);
    } catch(error){
        console.error('Error searching for patient:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}

const verifyaadhar = async (req,res) => {
    
}

module.exports = {
    findpatient,
    checkrole
  };
