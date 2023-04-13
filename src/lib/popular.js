
const baseURL = "http://localhost:3000/api";

export default async function getPopular(id){
    const res = await fetch(`${baseURL}/popular`)
    const posts = await res.json()

    if(id){
        return posts.find(value => value.id == id)
    }

    return posts;
}
