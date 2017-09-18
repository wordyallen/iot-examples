export const echo = (e, c, cb) => cb(null,{
  statusCode: 200,
  body: JSON.stringify(e)
})
//rap
