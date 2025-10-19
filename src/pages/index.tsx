import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";

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
            A FUNdraising event for Hannes Coetzee to assist with cancer
            treatments and life.
          </div>
        </div>

        <div className="flex gap-3 p-6">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Register Here
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <span className={title()}>Info</span>
        <span className={title({ color: "violet" })}>_______________</span>
        <div />
        <div className="inline-block max-w-lg text-center justify-center">
          <Table hideHeader aria-label="Info Table">
            <TableHeader>
              <TableColumn>Info Ask</TableColumn>
              <TableColumn>Info Answer</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>WHEN:</TableCell>
                <TableCell>Saturday October 25 2025 at 12:00 PM</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>WHERE</TableCell>
                <TableCell>Mazzy&#39;s Bar and Grill - Milton</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>COST</TableCell>
                <TableCell>$50 per Team (Due at 12:30PM)</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>PAYOUT</TableCell>
                <TableCell>1st, 2nd, 3rd Place Teams</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex text-left flex-col gap-5 p-6">
            <span>
              This event is a Scotch Doubles Pool Tournament, complete with
              raffle prizes and overall good fun!
            </span>
            <span>
              No team? No sweat! Make new friends here and get picked up or
              assigned one.
            </span>

            <span>
              To register, use the &#34;Register Here&#34; button above and fill
              out the Google Form.
            </span>
            <span>
              No need to directly participate, feel free to donate from afar
              using the links below or the fun as a spectator, cheerleader, or
              bar patron!
            </span>
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
      {/*<div className="mt-8">*/}
      {/*  <Snippet hideCopyButton hideSymbol variant="bordered">*/}
      {/*    <span>*/}
      {/*      Get started by editing{" "}*/}
      {/*      <Code color="primary">pages/index.tsx</Code>*/}
      {/*    </span>*/}
      {/*  </Snippet>*/}
      {/*</div>*/}

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={subtitle()}>&nbsp;</span>
        </div>
      </section>
    </DefaultLayout>
  );
}
