import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import { getRegularPage } from "@lib/contents";

const notFound = ({ data }) => {
  return (
    <Base>
      <NotFound data={data} />
    </Base>
  );
};

// for regular page data
export const getStaticProps = async () => {
  const notFoundData = await getRegularPage();
  return {
    props: {
      data: notFoundData,
    },
  };
};

export default notFound;
