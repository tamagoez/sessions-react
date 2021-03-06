// import { useState } from 'react'
import { supabase } from '../supabaseClient'

// import { useAlert } from 'react-alert'

import React from 'react';
import LogoutToast from '../components/LogoutToast'

// import { Spinner } from '@chakra-ui/react'
import { createStandaloneToast, Spinner } from '@chakra-ui/react'

function LogoutProcess() {
  const session = supabase.auth.session();
  console.log('Session: ' + session)
  async function Deal() {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      LogoutToast()
      window.location.replace("/thanks")
    } catch (error) {
      AuthToast('Logout Failed', error, 'error')
    } finally {
    }
  }
  Deal();
  return (null);
}
  

export default function Logout() {
  // const alert = useAlert();
  return (
    <div>
      <p>Dealing Logout process...<br />After a second, you will redirect to thanks page.</p>
      <Spinner
        thickness='4px'
        speed='0.4s'
        emptyColor='gray.100'
        color='green.500'
        size='xl'
      />
      <LogoutProcess />
    </div>
  )
}

  
function AuthToast(title, description, status){
  // const toast = useToast()
  const toast = createStandaloneToast()
  var closab = ((status === 'error') ? false : true)
  toast({
        title: title,
        description: description,
        status: status,
        duration: 6000,
        isClosable: closab,
      })
}
