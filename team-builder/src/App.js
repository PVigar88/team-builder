import "./App.css";
import React, { useState, useEffect } from "react";
import TeamMember from "./components/TeamMember";
import TeamForm from "./components/TeamForm";
import axios from "./axios";

const initialFormData = {
  username: "",
  email: "",
  role: "",
};

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  const updateForm = (inputKey, inputValue) => {
    setFormData({ ...formData, [inputKey]: inputValue });
  };
  const submitForm = () => {
    // 🔥 STEP 9 - IMPLEMENT a submit function which will be used inside the form's own `onSubmit`
    //  a) make a new friend object, trimming whitespace from username and email
    const newMember = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      role: formData.role,
    };

    if (!newMember.username && !newMember.email && !newMember.role) return;
    axios
      .post("fakeapi.com", newMember)
      .then((res) => {
        setTeamMembers([...teamMembers, newMember]);
        setFormData(initialFormData);
      })
      .catch((err) => {
        console.log("an error has occured");
      });
  };

  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setTeamMembers(res.data));
  }, []);

  return (
    <div className="App">
      {teamMembers.map((member) => {
        return <TeamMember key={member.id} info={member} />;
      })}
      <TeamForm data={formData} update={updateForm} submit={submitForm} />
    </div>
  );
}

export default App;
