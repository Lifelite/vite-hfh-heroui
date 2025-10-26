import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";


import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GoFundMeIcon, Venmo } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "violet" })}>Hearts&nbsp;</span>
          <span className={title()}>for </span>
          <span className={title({ color: "violet" })}>Hannes&nbsp;</span>
          <div className={subtitle({ class: "mt-4" })}>
            This event is concluded BUT you can still donate!
          </div>
        </div>

      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <span className={title({ size: "sm" })}>Donation Links</span>
        <span className={title({ color: "violet" })}>_______________</span>
        <div />
        <div className="flex gap-6 p-3">
          <Link
            isExternal
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
              color: "success",
            })}
            href={siteConfig.links.gofundme}
          >
            <GoFundMeIcon size={20} />
            GoFundMe
          </Link>
          <Link
            isExternal
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
              color: "success",
            })}
            href={siteConfig.links.venmo}
          >
            <Venmo size={20} />
            Venmo
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={subtitle()}>&nbsp;</span>
        </div>
      </section>
    </DefaultLayout>
  );
}
