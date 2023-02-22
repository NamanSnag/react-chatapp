import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import contactList from "../../data/conversation";

import "./style.scss";

const LeftSidebar = () => {
  const [conversation, setConversation] = useState(contactList);
  const [search, setSearch] = useState("");
  const [openConversation, setOpenConversation] = useState(false);

  const filteredContactList = conversation.filter((contact) => {
    return contact.name.toLowerCase().includes(search.toLowerCase());
  });

  const contact = useRef();
  const image = useRef();

  const addContact = (e) => {
    e.preventDefault();
    let id = conversation.length + 2;
    let name = contact.current.value;
    let avatar = image.current.value;
    if (name == "" && avatar == "") {
      setOpenConversation(false);
      alert("Please enter a name and avatar");
      return;
    }
    const newContact = {
      id: id,
      name: name,
      avatar: avatar,
      messages: [],
    };
    setConversation((prev) => {
      return [...prev, newContact];
    });
    contact.current.value = "";
    image.current.value = "";
    setOpenConversation(false);
  };

  return (
    <section className="left">
      <div className="fixed">
        <div className="searchbox">
          <input
            type="search"
            className="searchInput"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            placeholder="Search for conversation"
          />
        </div>
        <div>
          {openConversation ? (
            <>
              <div className="addCon">
                <p>CONVERSATIONS</p>
              </div>
              <form onSubmit={addContact} className="search">
                <input type="text" ref={contact} placeholder="Enter name" />
                <input type="url" ref={image} placeholder="Enter image url" />
                <button>+ Add</button>
              </form>
            </>
          ) : (
            <div className="addCon">
              <p>CONVERSATIONS</p>
              <button onClick={() => setOpenConversation(true)}>+</button>
            </div>
          )}
        </div>
      </div>

      <div className="contactList">
        {filteredContactList &&
          filteredContactList.map((item, index) => {
            return (
              <Link key={index} to={`/chat/${item.id}`} style={{textDecoration: 'none'}}>
                <div className="contact">
                  <img src={item.avatar} alt="" />
                  <div className="contactText">
                    <p className="name">{item.name}</p>
                    {item.lastMessage && <p>{item.lastMessage}</p>}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default LeftSidebar;
