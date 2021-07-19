export namespace GithubActivityStream {
  export interface Response {
    user: {
      issueComments: {
        edges: Array<{
          node: {
            url: string
            body: string
            issue: IssueMetadata
          }
        }>
      }
      pullRequests: {
        edges: Array<{
          node: IssueMetadata
        }>
      }
    }
  }

  export interface IssueMetadata {
    title: string
    url: string
    number: number
    repository: Repository
    body: string
  }

  export interface Repository {
    url: string
    nameWithOwner: string
    owner: {
      avatarUrl: string
    }
  }
}
