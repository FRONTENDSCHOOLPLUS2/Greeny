import { ImageRes } from './image';
import { PlantSimple } from './plant';
import { UserSimple } from './user';

export interface PostComment {
  _id: number;
  user: UserSimple;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostRes {
  _id: number;
  type: 'post';
  title: string;
  content: string;
  views: number;
  user: UserSimple;
  repliesCount?: number;
  replies?: PostComment[];
  seller_id?: null;
  image: ImageRes[];
  createdAt: string;
  updatedAt: string;
  product?: { image: null };
  extra?: {
    category: 'free' | 'qna' | 'planterior';
  };
}

export interface PostForm {
  type: 'post';
  tag: 'free' | 'qna' | 'planterior';
  title: string;
  content: string;
  //이미지 부분 나중에 추가
}

export interface DiaryRes {
  _id: number;
  product_id: number;
  type: 'diary';
  title: string;
  content: string;
  extra: {
    plantState: '좋음' | '새싹' | '개화' | '아픔' | '죽음';
    action: '물주기' | '햇빛' | '분갈이' | '영양' | '가지' | '관찰';
    actionDate: string;
  };
  views: number;
  user: UserSimple;
  seller_id: number;
  createdAt: string;
  updatedAt: string;
  product: PlantSimple;
  image: ImageRes[];
  repliesCount: 0;
}

export interface DiaryForm {
  type: 'diary';
  product_id: number;
  title: string;
  content: string;
  plantState: '좋음' | '새싹' | '개화' | '아픔' | '죽음';
  action: '물주기' | '햇빛' | '분갈이' | '영양' | '가지' | '관찰';
  actionDate: string;
  //이미지 부분 나중에 추가
}
