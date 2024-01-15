import Image from "next/image";
import styles from "@/app/[slug]/style.module.sass";

export default function page() {
  return (
    <div className="container pb-80">
        <div className="row">
            <div className="col col-9">
                <div className="h6 mb-10 c-orange">{ 'Product Reviews' }</div>
                <h2 className="mb-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nihil?</h2>
            </div>
        </div>
        <Image className={`${styles.featuredImage} mb-50`} src="/img_1.jpeg" alt="Image file" width="1300" height="380" />
        <div className="row">
            <div className="col col-9">
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab minus, nihil error vero necessitatibus, quidem impedit nam iste delectus, similique unde voluptate sequi provident quam porro neque nesciunt doloribus sit qui. Voluptatibus, molestiae. Adipisci nulla assumenda debitis ad quibusdam sint dolorem sed modi saepe.</p>
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab minus, nihil error vero necessitatibus, quidem impedit nam iste delectus, similique unde voluptate sequi provident quam porro neque nesciunt doloribus sit qui. Voluptatibus, molestiae. Adipisci nulla assumenda debitis ad quibusdam sint dolorem sed modi saepe.</p>
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab minus, nihil error vero necessitatibus, quidem impedit nam iste delectus, similique unde voluptate sequi provident quam porro neque nesciunt doloribus sit qui. Voluptatibus, molestiae. Adipisci nulla assumenda debitis ad quibusdam sint dolorem sed modi saepe.</p>
            </div>
        </div>
    </div>
  )
}
