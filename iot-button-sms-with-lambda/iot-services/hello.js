import {SNS} from 'aws-sdk'
const {SNS_TOPIC_ARN} = process.env

class Hello {

  sns = new SNS()

  run = done => this.sns.publish(
    {
      Message: 'Hey cutie! The button is working again 😘 ! ',
      TopicArn: SNS_TOPIC_ARN
    },
    done
  )
}

const hello = new Hello()

export const hello = (e, {done}, cb) => hello.run(done)
