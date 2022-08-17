import { createContext, useState } from 'react';
import axios from 'axios';

const EditContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [price, setPrice] = useState(212);
  const [name, setName] = useState('jan chuj');
  const [detalis, setDetalis] = useState('sadasd');
  const [photo, setPhopto] = useState();
  const [category, setCategory] = useState(['ani', 'dobre', 'ani', 'szwarne']);
  const [count, setCount] = useState(0);
  const [newCategory, setNewCategory] = useState();
  const [addInput, setAddInput] = useState(false);

  const allinone = async () => {
    const SendData = {
      price,
      name,
      detalis,
      photo,
      category,
      count,
    };
    // axios.post("192.168.0.143:4000/product", SendData)
    //     .then((data)=>console.log(data));
    console.log(SendData);
  };
  const send = async () => {
    // const formData = new FormData();
    // formData.append('file', photo);
    // axios
    //     .post('http://192.168.0.143:4000/image', formData)
    //     .then((data) => console.log(data));
  };

  const addCategory = () => {
    if (
      newCategory !== '' &&
      category.findIndex(x => x === newCategory) === -1
    ) {
      console.log(newCategory);
      const newArray = [...category];
      newArray.push(newCategory);
      setCategory(newArray);
      setNewCategory('');
      setAddInput(false);
    }
  };

  const deleteCategory = e => {
    const newArray = [...category].filter(x => x !== e.target.value);
    setCategory(newArray);
  };

  const validPhoto = ph => {
    const background = document.getElementById('background');
    if (ph) {
      if (
        ph.type === 'image/png' ||
        ph.type === 'image/jpeg' ||
        ph.type === 'image/jpg'
      ) {
        background.style.backgroundImage = `url(${URL.createObjectURL(ph)})`;
        background.style.backgroundRepeat = 'no-repeat';
        background.style.backgroundSize = 'cover';
        background.style.boxShadow = ``;
        setPhopto(ph);
      } else {
        background.style.boxShadow = `inset 0 0 5em red, 0 0 1em red`;
        background.style.backgroundImage = `url()`;
      }
    }
  };

  return (
    <EditContext.Provider
      value={{
        price,
        name,
        detalis,
        photo,
        category,
        addInput,
        count,
        newCategory,
        setAddInput,
        setCategory,
        setPhopto,
        setDetalis,
        setName,
        setPrice,
        setCount,
        addCategory,
        setNewCategory,
        deleteCategory,
        send,
        validPhoto,
        allinone,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

export { ProductContextProvider, EditContext };
