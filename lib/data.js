import { GraphQLClient } from 'graphql-request'

const graphcmsPublicAPI = `https://api-eu-central-1.graphcms.com/v2/ckemalxpl27tx01xlay2jhsi8/master`
const graphcms = new GraphQLClient(graphcmsPublicAPI)

function normalizePost(post) {
    return {
        ...post,
        createdAt: (new Date(post.createdAt)).getTime()
    }
}

export async function getPostList() {
    const query = `
        {
            posts {
                slug
                title
                content
                createdAt
            }
        }
    `
    const { posts } = await graphcms.request(query)

    return posts.map(normalizePost)
}

export async function getPost(slug) {
    const query = `
        query($slug: String){
            post(where: { slug: $slug }) {
                slug
                title
                content
                createdAt
            }
        }
    `
    const { post } = await graphcms.request(
        query,
        { slug }
    )

    return normalizePost(post)
}