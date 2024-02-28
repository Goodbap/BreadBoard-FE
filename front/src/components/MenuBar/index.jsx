import * as S from './MenuBar.styled';
import {
  HOME_IMG,
  USER_IMG,
  BOOK_MARK_IMG,
  FAVORITE_IMG,
} from '@/assets/location';

export const MenuBar = () => {
  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <S.ButtonForm src={HOME_IMG} alt="홈" />
        <S.TextForm>홈</S.TextForm>
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <S.ButtonForm src={BOOK_MARK_IMG} alt="저장된 맛집" />
        <S.TextForm>저장된 맛집</S.TextForm>
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <S.ButtonForm src={FAVORITE_IMG} alt="맛집 랭킹" />
        <S.TextForm>맛집 랭킹</S.TextForm>
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <S.ButtonForm src={USER_IMG} alt="마이페이지" />
        <S.TextForm>마이페이지</S.TextForm>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};
