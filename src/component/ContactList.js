import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const  { contactList, keyword } = useSelector(state => state);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
        let list = contactList.filter((item) => item.name.includes(keyword));
        setFilteredList(list);
    } else {
        setFilteredList(contactList);
    }
  }, [keyword, contactList]);
  return (
    <section className="item-list">
      <h2 className="sub-title">연락처 리스트</h2>
      <SearchBox />
      <p className="total-num">[ <span> {filteredList.length} </span>명 ]</p>
      <ul className="list-wrap">
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
