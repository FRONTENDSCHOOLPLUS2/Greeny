'use client';
import Image from 'next/image';
import styles from './Books.module.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import plantList from '@/app/data/plantList.json';
import Link from 'next/link';

interface FormData {
  keyword: string;
}

export interface Plant {
  cntntsSj: string;
  dlthtsCodeNm: string | {};
  eclgyCodeNm: string | {};
  flclrCodeNm: string | {};
  fmldeSeasonCodeNm: string | {};
  fmldecolrCodeNm: string | {};
  fncltyInfo: string | {};
  frtlzrInfo: string | {};
  grwhTpCodeNm: string | {};
  grwhstleCodeNm: string;
  hdCodeNm: string | {};
  indoorpsncpacompositionCodeNm: string | {};
  lefStleInfo: string | {};
  lefcolrCodeNm: string | {};
  lefmrkCodeNm: string | {};
  lighttdemanddoCodeNm: string;
  managedemanddoCodeNm: string;
  managelevelCodeNm: string | {};
  orgplceInfo: string | {};
  plntbneNm: string;
  postngplaceCodeNm: string;
  prpgtEraInfo: string | {};
  prpgtmthCodeNm: string;
  soilInfo: string | {};
  waterCycle: string | {};
  rtnOrginlFileNm: string;
  rtnStreFileNm: string;
  rtnThumbFileNm: string;
  rtnFileUrl: string;
}

export default function Page() {
  const [plants, setPlants] = useState<Plant[]>(plantList);

  const { register, handleSubmit } = useForm<FormData>();
  const submitHandler = (values: FormData) => {
    const result = plantList.filter((item: Plant) => item.cntntsSj.includes(values.keyword));
    setPlants(result);
  };

  return (
    <>
      <div className={styles.layout_main_search}>
        <form className={styles.main_search} onSubmit={handleSubmit(submitHandler)}>
          <input type="search" placeholder="식물명, 질문을 입력해주세요" {...register('keyword')} />
          <div className={styles.btn_group}>
            <button type="submit" className={styles.btn_submit}>
              <Image src="/images/SearchIcon.svg" width={18} height={18} alt="search" />
            </button>
            <button type="button" className={styles.btn_btn}>
              <Link href={'/books/search/'}>
                <Image src="/images/FilterIcon.svg" width={18} height={18} alt="filter" />
              </Link>
            </button>
          </div>
        </form>
      </div>

      {/* result */}
      <List list={plants} />
    </>
  );
}
function List({ list }: { list: Plant[] }) {
  return (
    <ul className={styles.content_list}>
      {list.map((item, idx) => (
        <Item key={idx} item={item} idx={idx} />
      ))}
    </ul>
  );
}

function Item({ item, idx }: { item: Plant; idx: number }) {
  return (
    <li>
      <Link href={`/books/${idx}`}>
        <div className={styles.item_wrapper}>
          <div className={styles.item_image_wrapper}>
            <Image src={item.rtnFileUrl} className={styles.item_image} width={90} height={90} alt="식물 썸네일" />
          </div>
          <div className={styles.item_content}>
            <p>{item.cntntsSj}</p>
            <span>{item.plntbneNm}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

type Inputs = {
  type: 'checkbox' | 'radio';
  name: string;
  list: {
    id: string;
    label: string;
  }[];
};
// const Sample = {
//   type: 'checkbox',
//   name: 'plant-type',
//   list: [{ id: '관엽형', label: '관엽형' }],
// };
function Inputs({ inputs }: { inputs: Inputs }) {
  return (
    <div className={styles.inputs_wrapper}>
      {inputs.list.map((item) => (
        <>
          <input type={inputs.type} name={inputs.name} id={item.id} />
          <label htmlFor={item.id}>{item.label}</label>
        </>
      ))}
    </div>
  );
}
