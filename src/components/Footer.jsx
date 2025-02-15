import React, {useState} from 'react';
import { ContFooter } from "../styles/Footer";
import Button from '@mui/material/Button';
import ContactForm from "./ContactForm";

export const Footer = () =>{

  const [open, setOpen] = useState(false);
  
  return (
    <ContFooter>
        <div className="elementFooter">
            <div className="element1">
                Desarrollo a cargo de Dream Team Manejantes &copy;2022
            </div>
            <div className="element2">
                Tienes alguna duda? 
                <Button
                  className="contactButton"
                  onClick={() => setOpen(true)}
                >
                  Contáctanos
                </Button>
            </div>
            <ContactForm open={open} setOpen={setOpen} />
        </div>
    </ContFooter>
  )
}
