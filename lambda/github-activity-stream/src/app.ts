import { graphql } from '@octokit/graphql'
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import { GithubActivityStream } from '../../../types/github-activity-stream'

const GITHUB_API_KEY = process.env['ACTIVITY_STREAM_API_TOKEN'] ?? 'Invalid Token'

/** Retrieve a feed of recent github activities */
export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  const res = await graphql<GithubActivityStream.Response>(
    `
      {
        user(login: "supergrecko") {
          issueComments(last: 10) {
            edges {
              node {
                url
                body
                issue {
                  title
                  body
                  url
                  id
                  repository {
                    url
                    nameWithOwner
                    owner {
                      avatarUrl
                    }
                  }
                }
              }
            }
          }
          pullRequests(last: 10) {
            edges {
              node {
                url
                body
                title
                id
                repository {
                  url
                  nameWithOwner
                  owner {
                    avatarUrl
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `token ${GITHUB_API_KEY}`
      }
    }
  )

  return {
    statusCode: 200,
    body: JSON.stringify(res)
  }
}
