import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Hello World.{" "}</p>
      <ul>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
