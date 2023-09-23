import Link from "next/link"
import { blogsArray } from "../../public/lib/blogs"




export default function Home() {
  return (
    <main>
<h1 style={{fontSize : 29,fontWeight : "bold"}}>Student List</h1>
<br/>
<br/>
<ul>
  <li>
    <Link href="/1">Zunair</Link>
  </li>
  <li>
  <Link href="/2">Shees</Link>
  </li>
  <li>
  <Link href="/3">Yousha</Link>
  </li>
  <li>
  <Link href="/4">Nahyan</Link>
  </li>
  <li>
  <Link href="/5">Shayan</Link>
  </li>
</ul>
    </main>
  )
}
