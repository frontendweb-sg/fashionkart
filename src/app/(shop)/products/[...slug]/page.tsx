/**
 * Product detail page
 * @param param0
 * @returns
 */
const Page = ({ params }: { params: { slug: string } }) => {
  return <div>{JSON.stringify(params)}</div>;
};

export default Page;
