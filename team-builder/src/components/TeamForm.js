import React from "react";

export default function TeamForm(props) {
  const { data, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-inputs">
        <label>
          Name<span>&nbsp;</span>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={onChange}
          />
        </label>

        <label>
          Email<span>&nbsp;</span>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChange}
          />
        </label>
        <label>
          Role<span>&nbsp;</span>
          <select name="role" onChange={onChange}>
            <option value="">select role</option>
            <option value="DM">Dungeon Master</option>
            <option value="Player">Player</option>
            <option value="Spectator">Spectator</option>
          </select>
        </label>

        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
