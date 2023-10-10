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
    <div>
      <Link href={LINKS.HOME}>Главная</Link>
      {data.map((item) =>
        item?.link ? (
          <Link href={item.link} key={item.title}>
            {item.title}
          </Link>
        ) : (
          <a key={item.title}>{item.title}</a>
        )
      )}
    </div>
  );
};

export default Breadcrumb;
