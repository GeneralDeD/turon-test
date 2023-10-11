import { LINKS } from "@/consts";
import Link from "next/link";

export type IBreadcrumb = {
  data?: {
    title: string;
    link?: string;
  }[];
};

const Breadcrumb = ({ data = [] }: IBreadcrumb) => {
  return (
    <div className="flex gap-2 mb-5">
      <>
        <Link href={LINKS.HOME} className="underline">
          Главная
        </Link>
        <span>{">"}</span>
      </>
      {data.map((item) =>
        item?.link ? (
          <>
            <Link href={item.link} key={item.title}>
              {item.title}
            </Link>
            <span>{">"}</span>
          </>
        ) : (
          <a key={item.title}>{item.title}</a>
        )
      )}
    </div>
  );
};

export default Breadcrumb;
