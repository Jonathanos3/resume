import React from 'react'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { GoGist, GoStar } from 'react-icons/go'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'


const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto bg-network'>
      <PageHead />
      <Hero />
      <div className='bg-white rounded-lg shadow-lg py-12 px-8 mx-8 md:mx-0 md:px-16'>
        <h3 className='text-4xl text-center text-orange'> What i do</h3>
        <p className='text-2xl'> Fullstack blablabla</p>
      </div>
      <div>
        <h3 className='text-4xl font-bold text-orange text-center uppercase mt-10 mb-5'> My Education</h3>
        <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg py-6 px-12'>
          <div className='border-dashed md:border-l px-6 mx-6 md:mx-0 md:px-12'>
            <h4 className='text-lg uppercase font-bold text-orange'>Graduation Degree</h4>
            <p className='text-2xl'>Computer Information Systems</p>
            <span className='text-lg normal-case font-bold'> College - Projection Ceilândia</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className='mx-6 md:mx-0 text-4xl font-bold text-orange text-center uppercase mt-10'>Tech contribuitons</h3>
        <p className='text-center'>GitHub stats: <RiGitRepositoryLine className='inline-block' /> {user.public_repos}/ <GoGist className='inline-block' /> {user.public_gists}/ <FiUsers className='inline-block' /> {user.fallowers}</p>
        <div className='md:grid md:grid-cols-3 md:gap-4 md:my-6'>
          {repos.map(repo => {
            return (
              <div key={repo.id} className='my-3 md:my-0 rounded bg-gray-200 p-4 hover:shadow-md'>
                <h3 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a></h3>
                <p>Language: {repo.language} / <GoStar className='inline-block' /> Stars: {repo.stargazers_count} </p>
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <p className='text-center my-8 py-4 border-t-2'>
          You can find the source-code of this website:
          <br />
          <a href=''> https://github.com/jonathanos3</a>
        </p>
      </div>

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