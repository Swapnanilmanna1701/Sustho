import { Hero } from '@/components/typer/Hero'
import { ThemeProvider } from '@/components/typer/theme-provider'

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <main className=" ">
        <Hero />    
      </main>
    </ThemeProvider>
  )
}