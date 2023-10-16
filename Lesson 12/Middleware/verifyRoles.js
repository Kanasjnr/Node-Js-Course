const { default: tr } = require("date-fns/esm/locale/tr/index.js");

const verifyRoles = (...allowedRoles) => {
    return (req, res,next) => {
        if(req?.roles) return  res.sendStaus(401)
        const rolesArray = [...allowedRoles]
    console.log(rolesArray);
    console.log(req.roles);
    const result = req.roles.map(rolesArray.includes(roles).find(val => val === true))
    if(!result) return res.sendStaus(401)
    next()
    }
}

module.exports = verifyRoles