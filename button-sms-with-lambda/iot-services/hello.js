import {SNS} from 'aws-sdk'
const {SNS_TOPIC_ARN} = process.env

class Hello {

  sns = new SNS()

  run = done => this.sns.publish(
    {
      Message: 'Hey! The button is working 👍🏿  ! ',
      TopicArn: SNS_TOPIC_ARN
    },
    done
  )
}

const hello = new Hello()

export default (e, {done}, cb) => hello.run(done)
