import post from './Post.module.scss';

export default function DropDown() {
  return (
    <ul className={post.dropdown_container}>
      <li>
        <button className={post.dropdown_option}>글 수정</button>
      </li>
      <li>
        <button className={post.dropdown_option}>글 삭제</button>
      </li>
    </ul>
  );
}
