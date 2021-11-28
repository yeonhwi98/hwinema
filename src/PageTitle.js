import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title> hwinema start | {title} </title>
    </Helmet>
  );
};
