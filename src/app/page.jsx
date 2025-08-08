import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'Isaac Williams is a digital nomad traveling the world and building the future. reach him at williams@suncture.io',
}

export default function Home() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Isaac Williams Oladele
          </h1>
          <br />
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-400 sm:text-3xl">
            a digital nomad currently living in Lagos, where I build the future. <br />
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-800 dark:text-zinc-300">
            <p>I’ve been making things for as long as I can remember. I wrote my first program at the age of 16, just weeks after my dad bought me my first mobile phone and I discovered the internet.</p>

            <p>Soon after, I was honored as an Outstanding Personality in Education by the state governor — a recognition for my work creating websites for schools and leading over 300 students to do the same. I organized seminars, talk shows, and technical sessions that equipped young people with practical digital skills, sparking many of their first steps into technology.</p>

            <p>My professional career took shape at Fireflies.ai, one of the fastest-growing AI startups in the world. I spent eight years there — four years as an individual contributor, building core products that now serve millions of users globally, and another four years as Tech Lead, where I built and led the research team from the ground up. In that role, I directed cutting-edge work in natural language processing, voice intelligence, and meeting automation, helping position Fireflies as a category leader in AI-powered meeting solutions.</p>

            <p>Along the way, I’ve led engineering teams at multiple startups, guiding products from concept to market adoption. I also founded Fuddle.ai, an AI-powered nutrition assistant designed to help millions of people eat smarter and live healthier.</p>

            <p>Today, my focus is on Suncture.io — combining my technical expertise, leadership experience, and deep passion for healthcare into a platform that redefines how medical care is delivered in the 21st century.</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/wilforlan" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://instagram.com/seacverse" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/wilforlan" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/wilforlan" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:williams@suncture.io"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              williams@suncture.io
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
