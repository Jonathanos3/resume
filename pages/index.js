import React from 'react'


const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl'>Olá, eu sou Jonathan Oliveira</h1>
      <h2 className='font-bold text-3xl'> Meus repositórios no GitHub</h2>
      <p>GitHub stats:public repos: {user.public_repos} / public_gists: {user.public_gists} / followers: {user.fallowers}</p>
      {repos.map(repo => {
        return (
          <div key={repo.id} className='rounded bg-gray-200 m-8 p-4 hover:shadow-md'>
            <h3 className='font-bold'>{repo.full_name}</h3>
            <p>Language: {repo.language} / Stars: {repo.stargazers_count} / </p>
          </div>
        )
      })}
    </div>

  )
}
export async function getServerSideProps(context) {
  const resUser = await fetch('https://api.github.com/users/jonathanos3')
  const user = await resUser.json()

  const resRepos = await fetch('https://api.github.com/users/jonathanos3/repos?sort=updated')
  const repos = await resRepos.json()


  return {
    props: {
      currentDate: new Date().toString(),
      repos,
      user
    }
  }
}
export default Index