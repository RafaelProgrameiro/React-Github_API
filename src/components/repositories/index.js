import React, { useState, useEffect } from 'react';
import RepositoryItem from '../repository-item';
import useGithub from '../../hooks/github_hooks';
import * as S from './styled';


const Repositories  = () => {

  const { githubState , getUserRepos, getUserStarred } = useGithub();
  
  const [hasUserForSearchStarred, setHasUserForSearchStarred ] = useState(false);

  useEffect(() => {
    if(!!githubState.user.login) {
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchStarred(!!githubState.repositories);
      
  }, [githubState.user.login]);

  const [hasUserForSearchRepos, setHasUserForSearchRepos ] = useState(false);

  useEffect(() => {
    if(!!githubState.user.login) {
      getUserRepos(githubState.user.login);
    }
    setHasUserForSearchRepos(!!githubState.repositories);
      
  }, [githubState.user.login]);
  
  return (
    <>
      {hasUserForSearchRepos ? (
    <S.WrapperTabs
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected"
    >
        <S.WrapperTablist>

            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>

        </S.WrapperTablist>
        <S.WrapperTabPanel>
          <S.WrapperList>
            {githubState.repositories.map(item => (
              <RepositoryItem
              key={item.id}
              name={item.name}
              linkToRepo={item.html_url}
              description={item.description}
              fullName={item.full_name}  /> 
          ))}
          </S.WrapperList>  
          
        </S.WrapperTabPanel>

        <S.WrapperTabPanel>
          <S.WrapperList>
            {githubState.starred.map(item => (
              <RepositoryItem
              key={item.id}
              name={item.name}
              linkToRepo={item.html_url}
              description={item.description}
              fullName={item.full_name}  /> 
              
          ))}
        </S.WrapperList>  
        </S.WrapperTabPanel>
    </S.WrapperTabs>
      ) : (
        <> </>
    )}
    </>
  )
}

export default Repositories;