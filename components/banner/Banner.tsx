import { Container } from "..";
import { Breadcrumb } from "../breadCrumb";
import { IBreadcrumb } from "../breadCrumb/BreadCrumb";

interface IBanner {
  title: string;
  breadCrumb?: IBreadcrumb["data"];
}

const Banner = ({ title, breadCrumb }: IBanner) => {
  return (
    <Container>
      {breadCrumb && <Breadcrumb data={breadCrumb} />}
      <h1 className="text-4xl font-bold">{title}</h1>
    </Container>
  );
};

export default Banner;
