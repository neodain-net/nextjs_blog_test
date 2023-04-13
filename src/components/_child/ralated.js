import Link from "next/link"
import Image from "next/image"
import Author from "./author"
import Fetcher from "../../lib/fetcher"
import Spinner from "./spinner"
import Error from "./error"

export default function Ralated() {

    const { data, isLoading, isError } = Fetcher('api/posts')
    
    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>

    return (
        <section className="pt-20">
             <h1 className="font-bold text-3xl py-10">Related Posts</h1>

             <div className="flex flex-col gap-10">
                {
                    data.map((value, index) => (
                        <Post key={index} data={value}></Post>
                    ))
                }
             </div>
        </section>
    )
}


function Post( {data } ){

    const { id, title, category, img, published, author } = data;

    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={`/posts/post/${id}`}><a><Image src={img || ""} className="rounded" width={300} height={200} alt=""/></a></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={`/posts/post/${id}`}><a className="text-orange-600 hover:text-orange-800">{category || "No Category"}</a></Link>
                    <Link href={`/posts/post/${id}`}><a className="text-gray-800 hover:text-gray-600">- {published || ""}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/post/${id}`}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "No Title"}</a></Link>
                </div>
                { author ? <Author {...author}></Author> : <></>}
            </div>
        </div>
    )
}