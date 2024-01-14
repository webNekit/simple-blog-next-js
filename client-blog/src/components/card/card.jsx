import Image from 'next/image';
import styles from '@/components/card/card.module.sass';

export default function card() {
  return (
    <div className={styles.card}>
        <div className={styles.card_imageWrap}>
            <Image src="/img_1.jpeg" className={styles.card_image} alt="" fill={true} />
        </div>
        <div className={styles.card_contentWrap}>
            <div className={`${styles.card_label} h6 mb-10 c-orange`}>Product reviews</div>
            <h3 className={`${styles.card_title} h3 mb-20`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quae.</h3>
            <p className={`${styles.card_text} mb-20`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis repellat dolorem nemo libero. Natus similique ab, ipsam illum harum earum!</p>
        </div>
    </div>
  )
}
