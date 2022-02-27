import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './bootstrap/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Loginmodule from './components/Loginmodule';
import Contactus from './components/Contactus';
import Careers from './components/Careers';
import Home from './components/Home';
import Course from './components/Course';
import Courses from './components/Courses';
import CourseData from './components/data/CourseData';
import NotFounds from './components/NotFounds';
import Counselling from './components/Counselling';
import CounsellingReg from './components/CounsellingReg';
import Event from './components/Event';
import Login from './components/Login';
import Register from './components/Register';
import Main from './common/Main';
import ContextApp from './context/ContextApp';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFounds />} />
        <Route path='' element={<Main />} >
          <Route path='/' element={<Home />} />
          <Route path='/trainings' element={<Courses />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/event' element={<Event />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/counselling' element={<Counselling />} />
          <Route path='/counselling/:index' element={<CounsellingReg />} />
        </Route>
        <Route path="" element={<Loginmodule />} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/ContextApp" element={<ContextApp />} ></Route>


        {CourseData.map((item) => {
          return (<Route
            path={`/course/${item.id}`}
            element={<Course data={item} />}
          />)
        }
        )}
      </Routes>

    </BrowserRouter>
  )
}