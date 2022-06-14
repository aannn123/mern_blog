import React from 'react'
import { LoginBG } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

const Login = () => {
  return (
    <div className='main-page'>
        <div className='left'>
            <img src={LoginBG} className='bg-image' alt='img-register' />
        </div>
        <div className='right'>
            <p className='title'>Login</p>
            <Input label='Email' placeholder="Email" />
            <Gap height={18} />
            <Input label='Password' placeholder="Password" />
            <Gap height={20} />
            <Button title='Login' />
            <Gap height={60} />
            <Link title='Belum punta akun, silahkan daftar' />
        </div>
    </div>
  )
}

export default Login