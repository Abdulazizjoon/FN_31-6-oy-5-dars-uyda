import React, { useState } from "react";
import './index.css'
function Kontakt() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [text, setText] = useState('')
    let [data,setData]=useState([])
    
    function btn(e) {
        e.preventDefault()
        if (name.length<1&&email.length<1&&text.length<1) {
            alert('maydonlarni kiriting')
            return
        }
        if (name.length>1) {
            alert('bunday nom bolishi munkun emas')
            return
        }
        if (email.length<1) {
            alert('bunday email mavjud emas')
            return
        }
        if (text.length < 1) {
            alert("malumot yozish shart");
            return  
        }
        let user = {
            name: name,
            email: email,
            text:text
        }
        let copied=[...data]
        copied.push(user)
        setData(copied)
        console.log(user);
        alert("Rahmat! Xabaringiz qabul qilindi.");
    }

    return (
      <div>
        <form>
          <input
            className="kontakt"
            type="text"
            placeholder="ismingizni kiritng"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="kontakt"
            type="text"
            placeholder="emailni kiritng"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="kontakt1"
            type="text"
            placeholder="xabarni kiritng"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button onClick={btn} className="fuul">save</button>
        </form>
      </div>
    );
}
export default Kontakt