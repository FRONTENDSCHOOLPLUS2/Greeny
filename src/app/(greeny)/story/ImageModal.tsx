'use client';

import post from './Post.module.scss';
import Image from 'next/image';
// import { useRef } from 'react';

export default function ImageModal() {
  // const dialogRef = useRef(null);
  // const handleClose = () => {
  //   (dialogRef.current! as HTMLDialogElement).close();
  // };

  return (
    <dialog className={post.image_modal} open>
      <form method="dialog">
        {/* <button type="button" onClick={handleClose}> */}
        <button>
          <Image src="/images/CloseIcon.svg" width={18} height={18} alt="닫기" />
        </button>
        {/* 이미지 슬라이더를 넣을 수 있을까 */}
        <div style={{ width: 337, height: 337, backgroundColor: '#ddd' }}></div>
        {/* <Image src="" width={337} height={337} alt="" /> */}
      </form>
    </dialog>
  );
}
