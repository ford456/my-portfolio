import React from 'react'
import Contactsection from '../../components/Contact/Contactsection'
import Dynamicmap from '../../components/Contact/Dynamicmap'
import "../../styles/contacts.css"
import {SEO} from '../lib/seo';
export const metadata = SEO.contact

export default function page() {
  return (
    <>
    
    <Dynamicmap/>
    <Contactsection/>
    
    </>
  )
}
