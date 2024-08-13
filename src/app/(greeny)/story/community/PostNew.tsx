import post from './Post.module.scss';

export default function PostNew() {
  return (
    <>
      <h1 className={post.heading}>게시물 등록하기</h1>
      <form className={post.input_form}>
        <div>
          <label htmlFor="image">이미지</label>
          {/* <input type="file" name="attach" id="image" /> */}
          <div
            style={{
              width: 120,
              height: 120,
              backgroundColor: '#D5E1DE',
              borderRadius: 10,
              margin: '0 auto 0',
            }}
          >
            <img src="/images/PlantAddIcon.svg" alt="" style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          </div>
        </div>

        <div>
          <label htmlFor="title">
            제목
            <span className={post.required_mark}>*</span>
          </label>
          <input type="text" name="title" id="title" placeholder="제목을 입력해주세요." />
        </div>

        <div>
          <label htmlFor="description">
            상세 내용
            <span className={post.required_mark}>*</span>
          </label>
          <textarea rows={5} className={post.description} name="description" id="description" placeholder="상세 내용을 입력해주세요." />
        </div>

        <button type="submit" className={post.btn_submit}>
          등록하기
        </button>
      </form>
    </>
  );
}
