import React from 'react'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { GoGist } from 'react-icons/go'

const UserStats = ({ user }) => {
  return (
    <p className='text-center'>
      GitHub stats:
      <RiGitRepositoryLine className='inline-block' /> {user.public_repos}/
      <GoGist className='inline-block' /> {user.public_gists}/
      <FiUsers className='inline-block' /> {user.fallowers}
    </p>
  )
}
export default UserStats