import React from 'react';

const Header = ({ description, title }) => (
  <div className=" mb-10">
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
    <p className="text-lg text-blue-400">{description}</p>
  </div>
);

export default Header;
