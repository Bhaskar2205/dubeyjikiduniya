import Link from "next/link";import {posts} from "@/lib/posts";
export default function Blog(){return <div>{posts.map(p=><Link key={p.slug} href={`/blog/${p.slug}`}>{p.title}</Link>)}</div>}