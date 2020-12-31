import React from 'react'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { getAllPosts, getPost, PostSchema } from '../../lib/api'
import { Params } from 'next/dist/next-server/server/router'

export type PostProps = {
  post: PostSchema
}

export default function Post({ post }: PostProps) {
  const router = useRouter()

  if (!router.isFallback && !post.slug) {
    return (
      <ErrorPage statusCode={404} />
    )
  }

  return (
    <h1>
      Hello World.
    </h1>
  )
}

export async function getStaticProps({ params }: Params): Promise<Params> {
  const post = await getPost(params.slug)

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts()

  return {
    paths: allPosts.map(post => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  }
}