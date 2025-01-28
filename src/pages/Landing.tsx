//import Link from 'next/link';

import { ChevronRight } from 'lucide-react'
//import Navbar from '../components/Navbar'

const Landing = () => {
    return (
        <div className="min-h-screen bg-blue-200 text-primary-content">
            
            <main className="container mx-auto px-4 py-16">
                <section className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Unlock Your Coding Potential
                    </h1>

                    <p className="text-xl md:text-xl mb-8">
                        Learn, Code, and Create with <span className=' font-robotoslab'>Samarthan</span>
                    </p>
                    <button className="btn btn-primary btn-lg px-8 rounded-full" href='/login'>
                        Get Started <ChevronRight className="ml-2" />
                    </button>

                </section>

                <section className="flex flex-wrap gap-4 items-center justify-center">
                    <div className="card bg-primary text-primary-content w-96">
                        <div className="card-body">
                            <h2 className="card-title">AI Coding Tutor</h2>
                            <p>Learn coding with step by step guide with hints!</p>
                            <div className="card-actions justify-end">
                                <a className="btn" href="/ai-tutor">Check out!</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-primary text-primary-content w-96">
                        <div className="card-body">
                            <h2 className="card-title">Project Roadmap</h2>
                            <p>Get detailed Roadmap and Diagram for any project topic!</p>
                            <div className="card-actions justify-end">
                                <a className="btn" href="/project-roadmap">Check out!</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-primary text-primary-content w-96">
                        <div className="card-body">
                            <h2 className="card-title">AI Generated Quizzes</h2>
                            <p>Get AI Generated Quizzes on any topic of choice!</p>
                            <div className="card-actions justify-end">
                                <link  href="/quiz">Check out!</link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Landing;