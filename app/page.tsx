import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Automate&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>salary&nbsp;</h1>
        <br />
        <h1 className={title()}>
          calculation regardless of your technology experience.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Accurate, fast and modern salary calculation app.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Get Started
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          {/* <GithubIcon size={20} /> */}
          Book Demo Now
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by joining <Code color="primary">our waitlist</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
