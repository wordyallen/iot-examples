import fetch from 'node-fetch'
import {device} from 'aws-iot-device-sdk'

let iotKeys
const topic = 'testing'
const getClient = (accessKeyId,secretKey,sessionToken, host) => device({
    protocol: 'wss',
    port: 443,
    accessKeyId,
    secretKey,
    sessionToken,
    host
  })







test('Get Access Keys and the IoT endpoint  🔑  ', async ()=>

  fetch('https://dto7xhcb3e.execute-api.us-east-2.amazonaws.com/dev/iot-keys')
  .then( res =>  res.ok ?  res.json() : Promise.reject('no dice'))
  .then( res => {
    iotKeys = res
    expect(res).toHaveProperty('SecretAccessKey')
    expect(res).toHaveProperty('endpointAddress')
  })
  .catch( err =>  expect(err).toBeFalsy())

)


// test('Connect to IoT and Subscribe  🔌 ', done =>{
//
//   const {endpointAddress, AccessKeyId, SecretAccessKey, SessionToken } = iotKeys
//
//   const client = getClient(AccessKeyId, SecretAccessKey, SessionToken, endpointAddress)
//
//
//   client.on('connect', ()=> client.subscribe(topic))
//
//   client.on('message',  (_, message)=> {
//     expect(message.toString('utf8')).toEqual('yo')
//     console.log(message.toString('utf8'))
//   })
//
//   setTimeout( ()=> {
//     done()
//   }, 5000 )
//
// }, 6000)
//
//
// // setTimeout( ()=>process.exit(), 5000)
//
//
// test('Send Message  ✉️ ', done  =>{
//   const {endpointAddress, AccessKeyId, SecretAccessKey, SessionToken } = iotKeys
//
//   const client = getClient(AccessKeyId, SecretAccessKey, SessionToken, endpointAddress)
//
//   client.publish(topic, 'yo'); // send messages
//   done()
// })
