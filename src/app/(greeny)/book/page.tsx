'use client';
import Image from 'next/image';
import styles from './Book.module.scss';
import PlantImg1 from '@images/PlantImg1.png';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import data from '@/app/data/plantList.json';

interface FormData {
  keyword: string;
}

interface Plant {
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

export default function Book() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plants, setPlants] = useState<Plant[]>(data);

  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (values: FormData) => {
    const result = data.filter((item: Plant) => item.cntntsSj.includes(values.keyword));
    setPlants(result);
  };
  return (
    <>
      <div className={styles.layout_main_search}>
        <form className={styles.main_search} onSubmit={handleSubmit(onSubmit)}>
          <input type="text" name="search" placeholder="식물명, 질문을 입력해주세요" {...register('keyword')} />
          <div className={styles.btn_group}>
            <button type="submit" className={styles.btn_submit}>
              <Image src="/images/SearchIcon.svg" width={18} height={18} alt="search" />
            </button>
            <button type="button" className={styles.btn_btn}>
              <Image src="/images/FilterIcon.svg" width={18} height={18} alt="filter" />
            </button>
          </div>
        </form>
      </div>

      {/* result */}
      <List list={plants} />

      {/* modal */}
      {isModalOpen && <Modal />}
    </>
  );
}
function List({ list }: { list: Plant[] }) {
  return (
    <ul className={styles.content_list}>
      {list.map((item, idx) => (
        <Item key={idx} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }: { item: Plant }) {
  return (
    <li>
      <div className={styles.item_wrapper}>
        <div className={styles.item_image_wrapper}>
          <Image src={item.rtnFileUrl} className={styles.item_image} width={90} height={90} alt="식물 썸네일" />
        </div>
        <div className={styles.item_content}>
          <p>{item.cntntsSj}</p>
          <span>{item.plntbneNm}</span>
        </div>
      </div>
    </li>
  );
}

function Modal() {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.plant_type}>
        <p>식물의 종류를 선택해주세요.</p>
        <div className={styles.label_wrapper}>
          <label htmlFor="관엽형" className={styles.custom_checkbox}>
            <input type="checkbox" name="plant-type" id="관엽형" />
            <span>관엽형</span>
          </label>
          <label htmlFor="직립형" className={styles.custom_checkbox}>
            <input type="checkbox" name="plant-type" id="직립형" />
            <span>직립형</span>
          </label>
          <label htmlFor="덩굴성" className={styles.custom_checkbox}>
            <input type="checkbox" name="plant-type" id="덩굴성" />
            <span>덩굴성</span>
          </label>
          <label htmlFor="풀모양" className={styles.custom_checkbox}>
            <input type="checkbox" name="plant-type" id="풀모양" />
            <span>풀모양</span>
          </label>
          <label htmlFor="로제트형" className={styles.custom_checkbox}>
            <input type="checkbox" name="plant-type" id="로제트형" />
            <span>로제트형</span>
          </label>
          <label htmlFor="다육형" className={styles.custom_checkbox}>
            <input type="checkbox" name="plant-type" id="다육형" />
            <span>다육형</span>
          </label>
        </div>
      </div>
      <div className={styles.plant_props_wrapper}>
        <div className={styles.plant_props}>
          <p>식물의 잎무늬, 꽃 색, 열매 색을 선택해주세요.</p>
          <div className={styles.flower_color}>
            <p>꽃 색</p>
            <div className={styles.label_wrapper}>
              <label htmlFor="파랑색" className={styles.custom_checkbox}>
                <input type="checkbox" name="flower-color" id="파랑색" />
                <span>파랑색</span>
              </label>
              <label htmlFor="보라색" className={styles.custom_checkbox}>
                <input type="checkbox" name="flower-color" id="보라색" />
                <span> 보라색</span>
              </label>
              <label htmlFor="분홍색" className={styles.custom_checkbox}>
                <input type="checkbox" name="flower-color" id="분홍색" />
                <span> 분홍색</span>
              </label>
              <label htmlFor="빨강색" className={styles.custom_checkbox}>
                <input type="checkbox" name="flower-color" id="빨강색" />
                <span> 빨강색</span>
              </label>
              <label htmlFor="오렌지색" className={styles.custom_checkbox}>
                <input type="checkbox" name="flower-color" id="오렌지색" />
                <span> 오렌지색</span>
              </label>
              <label htmlFor="노랑색" className={styles.custom_checkbox}>
                <input type="checkbox" name="flower-color" id="노랑색" />
                <span> 노랑색</span>
              </label>
              <label htmlFor="흰색" className={styles.custom_checkbox}>
                <input type="checkbox" name="flower-color" id="흰색" />
                <span> 흰색</span>
              </label>
              <label htmlFor="혼합색" className={styles.custom_checkbox}>
                <input type="checkbox" name="flower-color" id="혼합색" />
                <span> 혼합색</span>
              </label>
              <label htmlFor="기타" className={styles.custom_checkbox}>
                <input type="checkbox" name="flower-color" id="기타" />
                <span> 기타</span>
              </label>
            </div>
          </div>
          <div className={styles.fruite_color}>
            <p>열매 색</p>
            <div className={styles.label_wrapper}>
              <label htmlFor="blue-leaf" className={styles.custom_checkbox}>
                <input type="checkbox" name="fruit-color" id="blue-leaf" />
                <span>파랑색</span>
              </label>
              <label htmlFor="purple-leaf" className={styles.custom_checkbox}>
                <input type="checkbox" name="fruit-color" id="purple-leaf" />
                <span>보라색</span>
              </label>
              <label htmlFor="pink-leaf" className={styles.custom_checkbox}>
                <input type="checkbox" name="fruit-color" id="pink-leaf" />
                <span>분홍색</span>
              </label>
              <label htmlFor="red-leaf" className={styles.custom_checkbox}>
                <input type="checkbox" name="fruit-color" id="red-leaf" />
                <span>빨강색</span>
              </label>
              <label htmlFor="orange-leaf" className={styles.custom_checkbox}>
                <input type="checkbox" name="fruit-color" id="orange-leaf" />
                <span>오렌지색</span>
              </label>
              <label htmlFor="yellow-leaf" className={styles.custom_checkbox}>
                <input type="checkbox" name="fruit-color" id="yellow-leaf" />
                <span>노랑색</span>
              </label>
              <label htmlFor="white-leaf" className={styles.custom_checkbox}>
                <input type="checkbox" name="fruit-color" id="white-leaf" />
                <span>흰색</span>
              </label>
              <label htmlFor="mixed-leaf" className={styles.custom_checkbox}>
                <input type="checkbox" name="fruit-color" id="mixed-leaf" />
                <span>혼합색</span>
              </label>
              <label htmlFor="etc-leaf" className={styles.custom_checkbox}>
                <input type="checkbox" name="fruit-color" id="etc-leaf" />
                <span>기타</span>
              </label>
            </div>
          </div>
          <div className={styles.leaf_pattern}>
            <p>잎무늬</p>
            <div className={styles.label_wrapper}>
              <label htmlFor="줄무늬" className={styles.custom_checkbox}>
                <input type="checkbox" name="leaf-pattern" id="줄무늬" />
                <span>줄무늬</span>
              </label>
              <label htmlFor="점무늬" className={styles.custom_checkbox}>
                <input type="checkbox" name="leaf-pattern" id="점무늬" />
                <span>점무늬</span>
              </label>
              <label htmlFor="잎 가장자리 무늬" className={styles.custom_checkbox}>
                <input type="checkbox" name="leaf-pattern" id="잎 가장자리 무늬" />
                <span>잎 가장자리 무늬</span>
              </label>
              <label htmlFor="기타(무늬없음 등)" className={styles.custom_checkbox}>
                <input type="checkbox" name="leaf-pattern" id="기타(무늬없음 등)" />
                <span>기타(무늬없음 등)</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.light_quantity}>
        <p>식물이 필요한 햇빛의 양을 선택해주세요.</p>
        <div className={styles.label_wrapper}>
          <label htmlFor="낮은 광도" className={styles.custom_checkbox}>
            <input type="checkbox" name="light-quantity" id="낮은 광도" />
            <span>낮은 광도</span>
          </label>
          <label htmlFor="중간 광도" className={styles.custom_checkbox}>
            <input type="checkbox" name="light-quantity" id="중간 광도" />
            <span>중간 광도</span>
          </label>
          <label htmlFor="높은 광도" className={styles.custom_checkbox}>
            <input type="checkbox" name="light-quantity" id="높은 광도" />
            <span>높은 광도</span>
          </label>
        </div>
      </div>
      <div className={styles.water_frequency}>
        <p>식물의 물 주기 빈도를 선택해주세요.</p>
        <div className={styles.label_wrapper}>
          <label htmlFor="always" className={styles.custom_checkbox}>
            <input type="radio" name="watering-frequency" id="always" />
            <span>항상 물을 촉촉하게 유지(물에 잠김)</span>
          </label>
          <label htmlFor="usually" className={styles.custom_checkbox}>
            <input type="radio" name="watering-frequency" id="usually" />
            <span>흙을 촉촉하게 유지(물에 잠기지 않음)</span>
          </label>
          <label htmlFor="sometimes" className={styles.custom_checkbox}>
            <input type="radio" name="watering-frequency" id="sometimes" />
            <span>토양 표면이 말랐을 때 충분히 관수함</span>
          </label>
          <label htmlFor="rarely" className={styles.custom_checkbox}>
            <input type="radio" name="watering-frequency" id="rarely" />
            <span>화분 흙이 대부분 말랐을 떄 충분히 관수함</span>
          </label>
        </div>
      </div>
    </div>
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
