import { Link } from 'next-view-transitions'
import { Container } from '@/components/container'
import { Logo } from '@/components/logo'

export function Header() {
  return (
    <header className="bg-surface border-b-2 border-b-border">
      <Container>
        <Link href="/">
          <div className="flex justify-between items-center h-16">
            <Logo />
          </div>
        </Link>
      </Container>
    </header>
  )
}
