import { notFound } from "next/navigation";

/**
 * Dynamic pages
 * @param param0
 * @returns
 */
const Page = ({ params }: { params: { page: string } }) => {
  if (
    ![
      "about",
      "contact",
      "privacy-policy",
      "terms-conditions",
      "shipping-return-policy",
    ].includes(params.page)
  ) {
    return notFound();
  }
  return <div>{params.page}</div>;
};

export default Page;
