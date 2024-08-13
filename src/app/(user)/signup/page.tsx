import styles from './Signup.module.scss';
import Logo from '@images/Logo.svg';
import git from '@images/Social_Github.svg';
import google from '@images/Social_Google.svg';
import kakao from '@images/Social_KaKao.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Signup() {
  return (
    <div className={styles.signup_wrapper}>
      <form>
        <h2>회원가입</h2>

        <div className={styles.file_container}>
          <h3>프로필 이미지</h3>
          <label htmlFor="image" className={styles.photoAdd}>
            <input type="file" id="image" />
          </label>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="name">
            이름<span>*</span>
          </label>
          <input type="text" id="name" placeholder="이름을 입력하세요." />
          <p>2글자 이상 입력해주세요.</p>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="email">
            이메일<span>*</span>
          </label>
          <input type="text" id="email" placeholder="이메일을 입력하세요." />
          <p>이메일 형식이 올바르지 않습니다.</p>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="password">
            비밀번호<span>*</span>
          </label>
          <input type="password" id="password" placeholder="비밀번호를 입력하세요." />
          <p>비밀번호 형식이 올바르지 않습니다.</p>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="phone">전화번호</label>
          <input type="text" id="phone" placeholder="전화번호를 입력하세요." />
          <p>10자리 이상 입력하세요.</p>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="address">주소</label>
          <input type="text" id="pasaddresssword" placeholder="주소를 입력하세요." />
          <p>10자리 이상 입력하세요.</p>
        </div>

        <button type="submit" className={styles.button}>
          회원가입
        </button>
      </form>
    </div>
  );
}
