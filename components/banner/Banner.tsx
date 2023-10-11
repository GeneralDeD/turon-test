import { Container } from "..";
import { Breadcrumb, IBreadcrumb } from "../breadCrumb";

interface IBanner {
  title: string;
  subTitle?: string;
  breadCrumb?: IBreadcrumb["data"];
}

const Banner = ({ title, subTitle, breadCrumb }: IBanner) => {
  return (
    <Container>
      {breadCrumb && <Breadcrumb data={breadCrumb} />}
      <h1 className="text-4xl font-bold">{title}</h1>
      {subTitle && <div className="text-2xl font-semibold text-gray-600 mt-2">{subTitle}</div>}
    </Container>
  );
};

export default Banner;
