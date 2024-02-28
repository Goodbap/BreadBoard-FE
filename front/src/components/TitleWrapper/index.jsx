import * as S from './TitleWrapper.styled';
import {TITLE, SLOGAN} from '@/constant/constant';

export const TitleWrapper = () => {
  return (
    <S.TitleWrapper>
      <S.Title>
        {TITLE}: {SLOGAN}
      </S.Title>
    </S.TitleWrapper>
  );
};
