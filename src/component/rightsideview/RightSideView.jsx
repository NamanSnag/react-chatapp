import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { VscRocket } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";

const RightSideView = () => {
  const [contact, setContact] = useState(null);
  const [ msg, setMsg ] = useState(false);
  const { id } = useParams();

  const contactList = useSelector(state=> state.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    setContact(contactList.find((item) => item.id === id));
  }, [contact,contactList, id]);

  const message = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    let newMessage = message.current.value;
    if(newMessage === ""){
      alert("Write Message, please!");
      return;
    }
    let msg = {
      "id": "1",
      "message": newMessage,
      "avatar": "https://images.unsplash.com/photo-1617330527074-fe659f90e7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" 
    }
    let newList = contactList.map(contact => {
      if (contact.id === id) {
        return {
          ...contact,
          messages: [...contact.messages, msg],
          lastMessage: newMessage
        };
      }
      return contact;
    });
    dispatch({ 
      type: "CONTACT_LIST", 
      payload: newList 
    });
    message.current.value = ""
    setMsg(true);
  }

  return (
    <div className="right">
      {contact ? (
        <>
          <section className="nav">
            <img src={contact.avatar} alt="profile" />
            <h2>{contact.name}</h2>
          </section>

          <section className="chats">
            {contact.messages.map((chat,i) =>
              chat.id === "1" ? (
                <div key={`right${id}${i}`} className="rightChat">
                  <img src={chat.avatar} alt="profile" />
                  <h4>{chat.message}</h4>
                </div>
              ) : (
                <div key={`left${id}${i}`} className="leftChat">
                  <img src={chat.avatar} alt="profile" />
                  <h4>{chat.message}{msg}</h4>
                </div>
              )
            )}
          </section>

          <section className="msg">
            <form onSubmit={sendMessage} className="send">
              <input type="text" ref={message} placeholder="Type your message here..." />
              <button>
                <VscRocket />
              </button>
            </form>
          </section>
        </>
      ) : (
        <>
          <section className="nav">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA6lBMVEX///8ArEdbuXQAgy3++/1YuXOq1bUAfyU2mU4Anz8Arj7i6eQAq0cAgCsAqT/x//cAlTli75qF0pxsxYPm//GIz53U/+D4//xv0pB60pav8cG38cdR75Fiw3xau3R5yo6n8btQsGk/wWzd/+xk0oq96cif1q6d3a2Pyp7G6s7H/9ZkvnzI6M/i+ueh5rTY797q+e3Y5du/28aE8K1Vx3NDp15J4oYmkUMAnzAAtEmN4KkpuVwUuVU/zXMQw1vC8c2v5bx7wo1X1IGM6q7M89oAu0ct1nWx+M2b/8OK/76N8bF/3qB9/bAAyV+qGQ4fAAAD8ElEQVR4nO3deVPaQBjH8QCuoE0XhUgQBBXEAxW1ngi1tbW1h33/b6dBaz1J9ok+2c36+84445/5zB5hgA2OgxBCCCGEEEIIIYQQMq6JpEuW51U6k0nXqXhJKf3KaqnaaIpkazaqpdVKIsb2WlmIrI5Es7zu8QM3Fpt6fDfIxS47cFPTAN4Sy8zEraxWHz9xu6obOJqojGux2FvW7QsS63w76o7OTeauaoUL6NeMAGabq1zCXQNW4ShR4lqJeyaswlFs0/SDGUOYzTY6PEC/bsoYNid5dlNzhAJCCCHUHoSxhTUIkwpCCCHUH4QQQqg/CCF8w8Il+4WmvNcGIYQQ6u9FwuL4PAv2Um9nY3924brZZzoosHS4TJ0bcYXtzpEMbSbP1PEhbXbEE/pbRycyE5Y78z7H08hIGcdYwmKvH+7jFAbGXIEwjHGExdMoH68wqKA+inGEp5E+diGBGENYHxggzB3yCb0VBSC7MH+suhTpwt7QBGEurzqIZGFxPnqbSUR4rLgSycLuRzOEubziNCULl85cQ4SK05QsXOurAJMQFniEE+tKkzTFQmcOQgghhBBCCCGEEEIIIYTw5UIfQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIUyLsAQhhBBCCCGE9gmpT6RTFWamTBE2PpGA6ROKeeKTIZWFLjNQWThXZBJm2I+UKAlF4zMNSBBO8QJVhYttNiH3IKoJGzUikCJkvmEoCcW5zygM5iknUUUoNukPEaYIeYnRQiGyxH2ULAxuGYznnaOEQszTfVRhsN2wCoNREg/+bv8d/cTFZrxn6lOFGXeKCZkvlEM6P+3GfFgEWXiNZOlLtzK2bfIW+iIhT3I2xjYCIYSJBmHcFI/jJxCEEEKoPwghhFB/EEIIof4ghBBC/UEIIYT6ewPCfeuFtfifTaRDOL3HAjRIeLZtuVB+5VmG5giHOzxAx6uaIexzDaEpQrnCtApNEcqDCy6gGUJOoAlC2a/u8gF1C10ppz/WuTYZklBOs/Tt+9UFq09ZKFvvWPJ9nhejZKEc0r8TaEpKQjlgnkmcqQilm2KgilAO0jtFHRWhbFG/O25WkcK0AyOFskU8omJcEULZIp4yMq9woWzV2e/I3IUKbQCGCq0AhgntAIYI5eBS98W9SmOFtgBDxvCH7kt7pcYKbQGOFf7UfWGv1hihPcBnha5NQKe98kToDm0CPiO0DPhU6J7t2/BK5q7HQrf/yy6g4z0SDtk+5dLVw3NPbv+3bUDH6d3/hUcbgU7lQFo9gkFLQ/kfaNkm8y//8oYo+5bdJu7lXf05OekvpP1tw/AmijFPuyOEEEIIIYQQSll/AYe/N+O9zZHVAAAAAElFTkSuQmCC"
              alt="profile"
            />
            <h2>Welcome To React Chat App </h2>
          </section>

          <section className="poem">
            <h3>
              In a world so digital and vast, Where distance is but a thing of
              the past, We chat away on this app so dear, With loved ones far
              and near.
            </h3>
            <h3>
              Our fingertips dance across the screen, As we type out thoughts
              and dreams, Sharing our lives with those we hold, In a virtual
              world, so bright and bold.
            </h3>
            <h3>
              With every message sent and received, Our hearts and minds are
              truly relieved, For this app brings us all together, Through every
              season, in any weather.
            </h3>
            <h3>
              So let us type away, and never cease, In this chat app, our hearts
              find peace, For in these words we share and send, We find love,
              laughter, and a friend.
            </h3>
          </section>
        </>
      )}
    </div>
  );
};

export default RightSideView;
