import React from "react";
import { VscRocket } from "react-icons/vsc";

import "./style.scss";

const RightSideView = () => {
  return (
    <div className="right">
      <section className="nav">
        <img 
          src="https://images.unsplash.com/photo-1634698813343-e2b78707c06b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGtyaXNobmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
          alt='profile'  
        />
        <h2>Krishna</h2>
      </section>

      <section className="chats">chat</section>

      <section className="msg">
        <div className="send">
          <input type="text" placeholder="Type your message here..." />
          <button><VscRocket /></button>
        </div>
      </section>
    </div>
  );
};

export default RightSideView;
