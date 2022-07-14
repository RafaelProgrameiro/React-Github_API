import React, { createContext, useCallback, useState} from 'react'
import api from '../services/api';

export const GithubContext = createContext ({
    hasUser: false,
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

const GithubProvider = ({children}) => {

  const [githubState, setGithubState] = useState({
    loading: false,
    user: {
        id: undefined,
        description: undefined,
        avatar: undefined,
        login: undefined,
        name: undefined,
        htmlUrl: undefined,        
        location: undefined,
        followers: 0,
        following: 0,
        publicGists: 0,
        publicRepos: 0,

    },

    repositories: [],
    starred: [],

  });

  const getUser = (username) => {
    
      setGithubState(prevState => ({
        ...prevState,
       loading: !prevState.loading,

      }));
      api.get(`users/${username}`).then(({
        data }) => {
        setGithubState(prevState => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data.id,
            description: data.description,
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,            
            htmlUrl: data.html_url,
            location: data.location,
            followers: data.followers,
            following: data.following,
            publicGists: data.public_gists,
            publicRepos: data.public_repos,
          }
        }));
      }).finally(() => {
        setGithubState(prevState => ({
          ...prevState,
         loading: !prevState.loading,
  
        }));
      })
  };

  const getUserRepos = (username) => {
        
    api.get(`users/${username}/repos`).then(({
      data }) => {
      setGithubState(prevState => ({
        ...prevState,        
        repositories: data, 
      }));
    }).finally(() => {
     
    })
};

const getUserStarred = (username) => {
        
  api.get(`users/${username}/starred`).then(({
    data }) => {
    setGithubState(prevState => ({
      ...prevState,        
      starred: data, 
    }));
  }).finally(() => {
   
  })
};

  

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), []),
  };
  
  
  return ( 
    <GithubContext.Provider value={contextValue}> {children} </GithubContext.Provider>
  );
};

export default GithubProvider