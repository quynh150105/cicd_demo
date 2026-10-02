type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return [{ slug: "Test" }];
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}
