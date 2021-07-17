import { Octokit } from 'octokit'
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'

const octokit = new Octokit()

/** Retrieve a feed of recent github activities */
export async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  const res = await octokit.rest.activity.listPublicEventsForUser({
    username: 'supergrecko'
  })

  return {
    statusCode: res.status,
    body: JSON.stringify(res.data)
  }
}
