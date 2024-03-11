import {useSanityClient} from 'astro-sanity'

export async function getAllPosts() {
     const client = useSanityClient()
     const query = '*[_type == "post"]'
     const params = {}
     const posts = await client.fetch(query, params)
     return posts;
}


export async function getProjects(){
    const client = useSanityClient()
    const query = '*[_type == "projects"]'
    const params = {}
    const projects = await client.fetch(query, params)
    return projects
}