import Link from "next/link"

export default async function Home() {
  return (
    <main>
      <header>
        <nav className="space-x-8">
          <Link href={"/"}>Home</Link>
        </nav>
      </header>
    </main>
  )
}
