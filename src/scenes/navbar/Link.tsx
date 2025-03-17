import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
};

function Link({ page }: Props) {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink href={} onClick={}>
      {page}
    </AnchorLink>
  );
}

export default Link;
