import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'

export async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: 'Hello from Lambda with TypeScript'
  }
}
