import React from 'react'
import { menu } from './stats'
import Link from 'next/link';
const Sidebar = () => {
  
  return (
    <div >
      <div className="text-2xl font-semibold text-center pt-5">
        <h1>Research</h1>
        <hr />
      </div>
      <div className=" ">
        {menu.map((menulink, index) => (
          <ul key={index} className=" ">
            <li className="flex items-center m-16">
              <span className="mx-1">{menulink.icon}</span>
              <Link href={menulink.path}>{menulink.title}</Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Sidebar
