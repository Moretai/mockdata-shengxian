module.exports = (req, res, next) => {
  console.log('<<<<<>>>>>>>>',req.headers.authorization)
  if (req.headers.authorization === 'Bearer 100') {
    next()
  } else {
    return res.status(401)
  }
}
