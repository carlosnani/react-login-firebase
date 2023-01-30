import { collection, doc, setDoc, query, where } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";

export const UseDBContext = createContext();

export const UseFireStoneDB = ({ children }) => {

  // const userCollectionRef = collection(db, "user");

  const teste = "Teste"
  const info = {
    nome: 'carlos',
    idade: '42'
  }

 
  return (
    <UseDBContext.Provider
      value = {{
         teste,
         info
      }}    
    >
      {children}
    </UseDBContext.Provider>
  );
};