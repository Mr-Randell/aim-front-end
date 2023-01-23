import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

function EditAssets() {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setdescription] = useState("");
    const [image_url, setImageUrl] = useState("");
    const [price, setPrice] = useState("");
    const [released_year, setReleasedYear] = useState("");
    const [status, setStatus] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();
    const data = {
      name,
      location,
      description,
      image_url,
      price,
      released_year,
      status,
    };

    useEffect(() => {
      fetch(`https://aim-snb2.onrender.com/assets/${id}`).then((res) => {
        setName(res.data.name);
        setLocation(res.data.location);
        setdescription(res.data.description);
        setImageUrl(res.data.image_url);
        setPrice(res.data.price);
        setReleasedYear(res.data.released_year);
        setStatus(res.data.status);
      });
    }, []);

    function Update(e) {
      e.preventDefault();
      fetch(`https://aim-snb2.onrender.com/assets/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(navigate("/assets"))
      };

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Asset Details</h2>
      <form onSubmit={Update} className="w-[50%] h-full flex flex-col mt-2">
        <label htmlFor="name">{name}</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        //   type="text"
          placeholder={name}
        />
        <textarea
          value={image_url}
          onChange={(e) => setImageUrl(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
        ></textarea>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        ></textarea>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
        />
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        />
        <input
          type="number"
          vvalue={released_year}
          onChange={(e) => setReleasedYear(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE asset
        </button>
      </form>
    </div>
  );
}

export default EditAssets