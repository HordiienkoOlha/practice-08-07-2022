import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./Header/Header";
import AddContacts from "./AddContacts/AddContacts"
import HomePage from "./HomePage/HomePage"

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<HomePage />}/>
        <Route path='/add' element={<AddContacts />} />
        
      </Route>
      <Route path="*" element={<Navigate to='/'/>}/>

    </Routes>
  );
};
