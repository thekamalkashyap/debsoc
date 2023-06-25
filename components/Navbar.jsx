import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useDisclosure } from "@mantine/hooks";
import { buttonVariants, Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { title: "Home", url: "/" },
  {
    title: "Curriculum",
    url: "https://www.thedebatingsociety.com/curriculum/",
  },
  { title: "Community", url: "https://www.thedebatingsociety.com/community/" },
  {
    title: "Membership",
    url: "https://www.thedebatingsociety.com/membership/",
  },
];

const Navbar = ({ pathname }) => {
  const [opened, handlers] = useDisclosure(false);
  return (
    <div className="shadow backdrop-filter backdrop-blur bg-gray-900 mb-12 sticky top-0 w-full z-[150] bg-opacity-50 md:bg-opacity-10">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={"/"} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "text-xl py-5 font-bold mr-4"
                )}
              >
                DEBSOC
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {links.map((link, i) => (
            <NavigationMenuItem className=" hidden md:block " key={i}>
              <Link href={link.url} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    buttonVariants({ variant: "navLink" }),
                    `text-base font-medium active:ring ${
                      pathname == link.url && "bg-white bg-opacity-10"
                    }`
                  )}
                >
                  {link.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <Button
          onClick={() => handlers.toggle()}
          className="md:hidden px-2 group"
        >
          {opened ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              className=" fill-white opacity-50 group-hover:opacity-100 "
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              className=" fill-white opacity-50 group-hover:opacity-100 "
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          )}
        </Button>
      </NavigationMenu>
      {opened && (
        <div className="flex flex-col px-4 pb-2">
          {links.map((link, i) => (
            <Link
              href={link.url}
              key={i}
              className={cn(
                buttonVariants({ variant: "navLink" }),
                `text-base font-medium active:ring md:hidden ${
                  pathname == link.url && "bg-white bg-opacity-10"
                }`
              )}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
