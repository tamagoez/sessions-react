import { useState } from 'react'
import { supabase } from '../supabaseClient'

import React from 'react';
import { Link } from 'react-router-dom';// 追加 Linkタブを読み込む

import { MdPassword, MdAlternateEmail } from "react-icons/md";

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [acid, setAcid] = useState('')
  const [password, setPassword] = useState('')
  var mailaddress = ''
  
  const handleLogin = async (request_email, request_password) => {
    var pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
    if (pattern.test(request_email)) {
      mailaddress = request_email
    } else {
      mailaddress = request_email + "@web-sessions.vercel.app"
    }
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({
        email: mailaddress,
        password: request_password,
      })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row flex flex-center">
      <div className="col-7 form-widget">
        <h1 className="header text-5xl">Login</h1>
        <div>
          <p><MdAlternateEmail /> Email address or ID</p>
          <input
            className="inputField"
            type="text"
            placeholder="mail@example.com or example"
            value={acid}
            onChange={(e) => setAcid(e.target.value)}
          />
        </div>
        <div>
          <p><MdPassword /> Password</p>
          <input
            className="inputField"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleLogin(acid, password)
            }}
            className={'button block'}
            disabled={loading}
          > 
            {loading ? <span>Loading</span> : <span>Login</span>}
          </button>
          <br />
          <Link to="/signup" className="button block">or Sign up</Link>
        </div>
      </div>
    </div>
  )
}
