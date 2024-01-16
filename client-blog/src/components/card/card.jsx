import Image from 'next/image';
import styles from '@/components/card/card.module.sass';
import Button, { IconTypes } from '@/components/button/button';
import ConditialRender from './conditial-render';

export default function card(props) {
  return (
    <div className={`${styles.card_list} ${props.className || ''}`}>
      <div className={styles.card}>
        <div className={styles.card_imageWrap}>
          <Image src={props.imgSrc} className={styles.card_image} alt="" fill={true} />
        </div>
        <div className={styles.card_contentWrap}>
          <ConditialRender condition={props.label}>
            <div className={`${styles.card_label} h6 mb-10 c-orange`}>{props.label}</div>
          </ConditialRender>
          <ConditialRender condition={props.title}>
            <h3 className={`${styles.card_title} h3 mb-20`}>{props.title}</h3>
          </ConditialRender>
          <ConditialRender condition={props.text}>
            <p className={`${styles.card_text} mb-20`}>{props.text}</p>
          </ConditialRender>
          <ConditialRender condition={props.href}>
            <Button href={props.href} icon={IconTypes.ARROW_RIGHT}>Read More</Button>
          </ConditialRender>
        </div>
      </div>
    </div>
  )
}
