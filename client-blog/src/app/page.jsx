import Card from "@/components/card/card";

export default function Home() {
  return (
    <div className="container pb-80">
      <Card label="Product Reviews" title="Заголовок для поста" text="Описание для поста" href="#" />
      <div className="row">
        <div className="col col_4 m-mw-100">
          <Card label="Product Reviews" title="Заголовок для поста" text="Описание для поста" href="#" />
        </div>
        <div className="col col_4 m-mw-100">
          <Card label="Product Reviews" title="Заголовок для поста" text="Описание для поста" href="#" />
        </div>
        <div className="col col_4 m-mw-100">
          <Card label="Product Reviews" title="Заголовок для поста" text="Описание для поста" href="#" />
        </div>
      </div>
    </div>
  )
}
