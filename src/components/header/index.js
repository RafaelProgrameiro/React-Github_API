import React, { useState } from 'react';
import * as S from './styled';
import useGithub from '../../hooks/github_hooks';

const Header = () => {

    const {getUser } = useGithub();
    const [userNameForSearch, setuserNameForSearch] = useState()

    const submitGetUser = () => {
        if(!userNameForSearch) return;
        return getUser(userNameForSearch);
    };

  return (
    <S.Wrapper>
        <input type="text" placeholder="Digite username para pesquisa" onChange={(e) => setuserNameForSearch(e.target.value)}/>

        <button type="submit" onClick={submitGetUser}><span>Buscar</span></button>
    </S.Wrapper>
  )
}

export default Header