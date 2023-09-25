/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import DisplayList from "./DisplayList";
import Stats from "./Stats";
import Form from "./Form";

export default function MainView() {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || []
  );
  const [formData, setFormData] = useState({
    item: "",
    quantity: "1",
    isDone: false,
  });
  const [editIndex, setEditIndex] = useState(-1);
  const scrollToRef = useRef();

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const updateData = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.item) {
      if (editIndex !== -1) {
        const updatedItems = [...items];
        updatedItems[editIndex] = formData;
        setItems(updatedItems);
        setEditIndex(-1);
      } else {
        setItems((prevItems) => [...prevItems, formData]);
      }
      setFormData({
        item: "",
        quantity: 1,
        isDone: false,
      });
    }
  };

  const editItem = (index) => {
    scrollToRef.current.scrollIntoView();
    setFormData(items[index]);
    setEditIndex(index);
  };

  const capFirstLetter = (text) => {
    const newText = text
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    return newText;
  };

  const handleComplete = (index) => {
    const updatedArray = items.map((item, i) => {
      return i === index ? { ...item, isDone: !item.isDone } : item;
    });
    setItems(updatedArray);
  };

  const deleteItem = (index) => {
    const filtered = items.filter((_, i) => {
      return i !== index;
    });
    setItems(filtered);
  };

  const deleteAll = () => {
    const confirmed = window.confirm("Are you sure you want to clear all items")
    if (confirmed) setItems([]);
  };

  return (
    <section className="grid">
      <Form
        handleSubmit={handleSubmit}
        scrollToRef={scrollToRef}
        formData={formData}
        updateData={updateData}
        editIndex={editIndex}
      />
      <DisplayList
        items={items}
        capFirstLetter={capFirstLetter}
        handleComplete={handleComplete}
        deleteItem={deleteItem}
        editItem={editItem}
        scrollToRef={scrollToRef}
        deleteAll={deleteAll}
      />
      <Stats items={items} />
    </section>
  );
}
