import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software tools I use to build apps, servers and websites and stay productive.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software tools I use to build apps, servers and websites."
      intro="I get asked a lot about the tools I use to build softwares, stay productive, and run my business. Here's a list of the software tools I use/'have used' to build apps, servers and websites."
    >
      <div className="space-y-20">
        <ToolsSection title="Backend & Application Development">
          <Tool title="NodeJS">
            It's been 7 years since I started using NodeJS and I've never looked back. I've built a lot of apps with NodeJS and I'm still building more.
            NodeJS is my go-to backend language for building APIs and servers due to its simplicity and the fact that it's JavaScript.
            <br /><br />
            I have used many frameworks and libraries for building APIs and servers with NodeJS, my favorite is NestJS.
            Others include ExpressJS, Fastify, Koa, Hapi, and AdonisJS.
          </Tool>
          <Tool title="Go Lang">
            I started learning Go Lang in 2019 and I've built a few apps with it. I love the simplicity of the language and the fact that it's a compiled language.
            <br /><br />
            I have used GoLang to build servers that require high performance and concurrency, like audio processing, video processing, and image processing, realtime applications and high throughput APIs.
          </Tool>
          <Tool title="Python">
            Python is a very beautiful language. I started using Python in 2017 and I've built quite a few applications with it.
            <br /><br />
            It's my go-to language for building machine learning applications and data science applications due to the availability of many libraries and frameworks for machine learning and data science.
            I have also build API using python-based frameworks like Flask and Django.
          </Tool>
          <Tool title="PHP">
            PHP was the first programming language I really learnt. I started using PHP in 2013 and I built a lot of applications with it.
            <br /><br />
            I have used PHP to build a lot of web applications, APIs, and servers. I have used many frameworks and libraries for building APIs and servers with PHP, my favorite is Laravel and Symphony.
            Others include CodeIgniter, CakePHP, and Slim.
            <br /><br />
            7 years ago, I released a version of my first PHP framework, which I named 'CogentPHP'. CogentPHP is a lightweight PHP framework for building APIs and servers.
            <a href="https://github.com/wilforlan/cogentphp" style={{ color: 'green'}}> You can check it out here.</a>
            <br />I have previously built a lot of WordPress websites and plugins with PHP.
          </Tool>
          <Tool title="React & React Native">
            React is my go-to frontend library for building web applications. I have built a lot of applications using React.
            <br /><br />
            I have also built a few mobile applications using React Native.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            I love VS Code for its simplicity and the fact that it's very fast. I have used many code editors and IDEs, but VS Code is my favorite.
            <br /><br />
            One of the things that pique my interest in VS Code is the extensions library that comes with it, which makes my development workflow a lot easier.
          </Tool>
          <Tool title="Zsh">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="Docker">
            Great software for working with containers. Has saved me from
            running about a thousand local instances for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            I started using Figma as just a design tool but now it’s become our
            virtual whiteboard for all of my apps. Never would have expected
            such thing to happen, but it did!
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            It’s not the newest kid on the block but it’s still the best for me. It's my go to app for seamless documentation and collaboration with teams.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="Slack">
            Great tool for team communication and collaboration. I have used it for a long time and I'm still using it.
          </Tool>
          <Tool title="Apple Notes">
            Simple way for me to remember things and quickly jot my thoughts down. I use it for everything from personal notes to work notes.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
