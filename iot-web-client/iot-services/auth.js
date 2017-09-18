import {Iot, STS} from 'aws-sdk'
import {generate} from 'shortid'

const iot = new Iot()
const sts = new STS()


export default async (e, _, cb) =>{

  const {endpointAddress} = await iot.describeEndpoint({}).promise()
  const {Account} = await sts.getCallerIdentity({}).promise()

  const RoleArn = `arn:aws:iam::${Account}:role/iot-example`
  const RoleSessionName = generate()  //Use the role session name to uniquely identify a session when the same role is assumed by different principals or for different reasons.

  const {Credentials:{AccessKeyId, SecretAccessKey, SessionToken}} =
    await sts.assumeRole({RoleArn, RoleSessionName}).promise()


  cb(null,{
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      endpointAddress,
      AccessKeyId,
      SecretAccessKey,
      SessionToken
    })
  })





}
