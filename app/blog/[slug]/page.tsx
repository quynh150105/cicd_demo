type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export function generateStaticParams() {
  return [{ slug: "test" }, { slug: "hello" }, { slug: "cicd" }];
}

export default function Page({ params }: Params) {
  <>
    <h1>Slug: {params.slug}</h1>;
    <p>
      {" "}
      This page is generated at build time and is served as a static HTML file
    </p>
    <p>
      {" "}
      This page is generated at build time and is served as a static HTML file
      hâha
    </p>
  </>;
}
