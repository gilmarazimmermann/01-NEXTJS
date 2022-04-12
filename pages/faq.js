import Link from 'next/link'

export default function FAQPage(){
    return(
        <div>
            <h1>Alura Cases - FAQ</h1>
            <Link href="/" passHref>
                <a>Ir para a Home</a>
            </Link>
        </div>
    )
}